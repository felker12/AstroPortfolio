import * as THREE from "three";

import {
  COLORS,
  REDUCED_MOTION,
  TUNNEL_LENGTH,
  CAMERA_START_Z,
  CAMERA_END_PADDING,
  WORLD_HEIGHT,
} from "./constants.js";

import { createParticleTexture } from "./texture.js";

import {
  createNodeField,
  createDustField,
  createConnectionMesh,
  updateConnections,
} from "./fields.js";

import {
  createWireframeObjects,
  createHeroObject,
} from "./objects.js";

export function initAurora() {
  const canvas = document.getElementById("aurora-canvas");

  if (!(canvas instanceof HTMLCanvasElement)) {
    return;
  }

  const mode = canvas.dataset.mode === "subtle"
    ? "subtle"
    : "hero";

  const isSubtle = mode === "subtle";

  const scene = new THREE.Scene();

  scene.fog = new THREE.FogExp2(
    COLORS.fog,
    isSubtle ? 0.052 : 0.043
  );

  const camera = new THREE.PerspectiveCamera(
    54,
    window.innerWidth / window.innerHeight,
    0.1,
    200
  );

  camera.position.set(0, 0, CAMERA_START_Z);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
  });

  renderer.setPixelRatio(
    Math.min(
      window.devicePixelRatio,
      isSubtle ? 1.5 : 1.75
    )
  );

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );

  renderer.setClearColor(COLORS.background, 1);

  const pointTexture = createParticleTexture();

  const nodeField = createNodeField(
    isSubtle ? 120 : 240,
    pointTexture
  );

  scene.add(nodeField.points);

  const dustField = createDustField(
    isSubtle ? 120 : 520,
    pointTexture
  );

  scene.add(dustField.points);

  let connectionMesh = null;
  let wireframes = null;
  let hero = null;

  if (!isSubtle) {
    connectionMesh = createConnectionMesh(nodeField);
    scene.add(connectionMesh.lines);

    wireframes = createWireframeObjects();
    scene.add(wireframes.group);

    hero = createHeroObject();
    scene.add(hero.group);
  }

  // ---- scroll input ----

  let targetScrollProgress = 0;
  let scrollProgress = 0;

  function readScroll() {
    const max =
      document.documentElement.scrollHeight -
      window.innerHeight;

    targetScrollProgress =
      max > 0
        ? window.scrollY / max
        : 0;
  }

  window.addEventListener(
    "scroll",
    readScroll,
    { passive: true }
  );

  readScroll();

  // ---- pointer parallax input ----

  let pointerX = 0;
  let pointerY = 0;
  let targetPointerX = 0;
  let targetPointerY = 0;

  function onPointerMove(event) {
    targetPointerX =
      (event.clientX / window.innerWidth - 0.5) * 2;

    targetPointerY =
      (event.clientY / window.innerHeight - 0.5) * 2;
  }

  window.addEventListener(
    "pointermove",
    onPointerMove,
    { passive: true }
  );

  function onResize() {
    camera.aspect =
      window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setPixelRatio(
      Math.min(
        window.devicePixelRatio,
        isSubtle ? 1.5 : 1.75
      )
    );

    renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );
  }

  window.addEventListener("resize", onResize);

  const timer = new THREE.Timer();

  // Allows Timer to account for tab visibility changes.
  timer.connect(document);

  let animationFrameId = 0;

  function animate() {
    timer.update();

    const elapsed = timer.getElapsed();
    const deltaTime = Math.min(
      0.05,
      timer.getDelta()
    );

    scrollProgress +=
      (targetScrollProgress - scrollProgress) *
      (isSubtle ? 0.025 : 0.055);

    pointerX +=
      (targetPointerX - pointerX) *
      (isSubtle ? 0.025 : 0.045);

    pointerY +=
      (targetPointerY - pointerY) *
      (isSubtle ? 0.025 : 0.045);

    if (isSubtle) {
      camera.position.z = CAMERA_START_Z;

      camera.position.x = pointerX * 0.12;
      camera.position.y = -pointerY * 0.07;

      camera.lookAt(
        pointerX * 0.04,
        -pointerY * 0.025,
        camera.position.z - 10
      );
    } else {
      camera.position.z =
        CAMERA_START_Z -
        scrollProgress *
          (TUNNEL_LENGTH - CAMERA_END_PADDING);

      camera.position.x = pointerX * 0.65;
      camera.position.y = -pointerY * 0.38;

      camera.lookAt(
        pointerX * 0.22,
        -pointerY * 0.14,
        camera.position.z - 10
      );
    }

    if (!REDUCED_MOTION) {
      animateNodeField(
        nodeField,
        camera,
        elapsed,
        pointerX,
        pointerY,
        isSubtle
      );

      animateDustField(
        dustField,
        elapsed,
        deltaTime,
        isSubtle
      );

      if (wireframes) {
        animateWireframes(
          wireframes,
          elapsed,
          deltaTime
        );
      }

      if (hero) {
        animateHero(hero, elapsed);
      }
    }

    if (connectionMesh) {
      updateConnections(
        connectionMesh,
        camera.position.z
      );
    }

    renderer.render(scene, camera);

    animationFrameId =
      window.requestAnimationFrame(animate);
  }

  animate();

  function destroy() {
    window.cancelAnimationFrame(animationFrameId);

    window.removeEventListener(
      "scroll",
      readScroll
    );

    window.removeEventListener(
      "pointermove",
      onPointerMove
    );

    window.removeEventListener(
      "resize",
      onResize
    );

    timer.dispose();

    nodeField.points.geometry.dispose();
    nodeField.points.material.dispose();

    dustField.points.geometry.dispose();
    dustField.points.material.dispose();

    if (connectionMesh) {
      connectionMesh.lines.geometry.dispose();
      connectionMesh.lines.material.dispose();
    }

    if (wireframes) {
      wireframes.objects.forEach(({ mesh }) => {
        mesh.geometry.dispose();

        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((material) =>
            material.dispose()
          );
        } else {
          mesh.material.dispose();
        }
      });
    }

    if (hero) {
      hero.group.traverse((object) => {
        if (!object.isMesh) return;

        object.geometry?.dispose();

        if (Array.isArray(object.material)) {
          object.material.forEach((material) =>
            material.dispose()
          );
        } else {
          object.material?.dispose();
        }
      });
    }

    pointTexture.dispose();
    renderer.dispose();
  }

  return {
    mode,
    renderer,
    scene,
    camera,
    nodeField,
    dustField,
    connectionMesh,
    wireframes,
    hero,
    destroy,
  };
}

function animateNodeField(
  nodeField,
  camera,
  elapsed,
  pointerX,
  pointerY,
  isSubtle
) {
  const positions =
    nodeField.points.geometry.attributes.position.array;

  const pointerStrength =
    isSubtle ? 0.07 : 0.28;

  const motionStrength =
    isSubtle ? 0.45 : 1;

  for (let i = 0; i < nodeField.count; i++) {
    const offset = i * 3;
    const phase = nodeField.phases[i];
    const speed = nodeField.driftSpeeds[i];
    const amount =
      nodeField.driftAmounts[i] * motionStrength;

    const depthFactor = THREE.MathUtils.clamp(
      1 -
        Math.abs(
          positions[offset + 2] -
            camera.position.z
        ) /
          16,
      0,
      1
    );

    const pointerInfluence =
      depthFactor * pointerStrength;

    positions[offset] =
      nodeField.basePositions[offset] +
      Math.sin(
        elapsed * speed + phase
      ) *
        amount +
      pointerX * pointerInfluence;

    positions[offset + 1] =
      nodeField.basePositions[offset + 1] +
      Math.cos(
        elapsed * speed * 0.78 + phase
      ) *
        amount *
        0.7 -
      pointerY * pointerInfluence;
  }

  nodeField.points.geometry.attributes.position.needsUpdate =
    true;
}

function animateDustField(
  dustField,
  elapsed,
  deltaTime,
  isSubtle
) {
  const positions =
    dustField.points.geometry.attributes.position.array;

  const speedMultiplier =
    isSubtle ? 0.4 : 1;

  const horizontalDrift =
    isSubtle ? 0.00035 : 0.0009;

  for (let i = 0; i < dustField.count; i++) {
    const offset = i * 3;

    positions[offset + 1] +=
      dustField.speeds[i] *
      deltaTime *
      speedMultiplier;

    positions[offset] +=
      Math.sin(
        elapsed * 0.35 +
          dustField.phases[i]
      ) *
      horizontalDrift;

    if (
      positions[offset + 1] >
      WORLD_HEIGHT
    ) {
      positions[offset + 1] =
        -WORLD_HEIGHT;
    }
  }

  dustField.points.geometry.attributes.position.needsUpdate =
    true;
}

function animateWireframes(
  wireframes,
  elapsed,
  deltaTime
) {
  wireframes.objects.forEach((item) => {
    item.mesh.rotation.x +=
      item.rotateX * deltaTime;

    item.mesh.rotation.y +=
      item.rotateY * deltaTime;

    item.mesh.position.y =
      item.baseY +
      Math.sin(
        elapsed * item.floatSpeed +
          item.floatPhase
      ) *
        0.22;
  });
}

function animateHero(hero, elapsed) {
  hero.core.rotation.x = elapsed * 0.18;
  hero.core.rotation.y = elapsed * 0.24;

  hero.inner.rotation.x = -elapsed * 0.35;
  hero.inner.rotation.z = elapsed * 0.28;

  hero.ringOne.rotation.z = elapsed * 0.12;
  hero.ringTwo.rotation.x = elapsed * 0.09;

  hero.group.position.y =
    -0.2 +
    Math.sin(elapsed * 0.38) * 0.18;
}