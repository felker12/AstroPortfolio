import * as THREE from "three";
import { COLORS, REDUCED_MOTION, TUNNEL_LENGTH, CAMERA_START_Z, CAMERA_END_PADDING, WORLD_HEIGHT } from "./constants.js";
import { createParticleTexture } from "./texture.js";
import { createNodeField, createDustField, createConnectionMesh, updateConnections } from "./fields.js";
import { createWireframeObjects, createHeroObject } from "./objects.js";

export function initAurora() {
  const canvas = document.getElementById("aurora-canvas");
  if (!canvas) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(COLORS.fog, 0.043);

  const camera = new THREE.PerspectiveCamera(54, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(0, 0, CAMERA_START_Z);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(COLORS.background, 1);

  const pointTexture = createParticleTexture();

  const nodeField = createNodeField(240, pointTexture);
  scene.add(nodeField.points);

  const dustField = createDustField(520, pointTexture);
  scene.add(dustField.points);

  const connectionMesh = createConnectionMesh(nodeField);
  scene.add(connectionMesh.lines);

  const wireframes = createWireframeObjects();
  scene.add(wireframes.group);

  const hero = createHeroObject();
  scene.add(hero.group);

  // ---- scroll input ----
  let targetScrollProgress = 0;
  let scrollProgress = 0;

  function readScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    targetScrollProgress = max > 0 ? window.scrollY / max : 0;
  }
  window.addEventListener("scroll", readScroll, { passive: true });
  readScroll();

  // ---- pointer parallax input ----
  let pointerX = 0;
  let pointerY = 0;
  let targetPointerX = 0;
  let targetPointerY = 0;

  window.addEventListener(
    "pointermove",
    (event) => {
      targetPointerX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetPointerY = (event.clientY / window.innerHeight - 0.5) * 2;
    },
    { passive: true }
  );

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener("resize", onResize);

  const clock = new THREE.Timer();
  let lastTime = 0;

  function animate() {
    clock.update();

    const elapsed = clock.getElapsed();
    const deltaTime = Math.min(0.05, elapsed - lastTime);
    lastTime = elapsed;

    scrollProgress += (targetScrollProgress - scrollProgress) * 0.055;
    pointerX += (targetPointerX - pointerX) * 0.045;
    pointerY += (targetPointerY - pointerY) * 0.045;

    camera.position.z = CAMERA_START_Z - scrollProgress * (TUNNEL_LENGTH - CAMERA_END_PADDING);
    camera.position.x = pointerX * 0.65;
    camera.position.y = -pointerY * 0.38;
    camera.lookAt(pointerX * 0.22, -pointerY * 0.14, camera.position.z - 10);

    if (!REDUCED_MOTION) {
      animateNodeField(nodeField, camera, elapsed, pointerX, pointerY);
      animateDustField(dustField, elapsed, deltaTime);
      animateWireframes(wireframes, elapsed, deltaTime);
      animateHero(hero, elapsed);
    }

    updateConnections(connectionMesh, camera.position.z);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();

  return { renderer, scene, camera, nodeField, dustField, connectionMesh, wireframes, hero };
}

function animateNodeField(nodeField, camera, elapsed, pointerX, pointerY) {
  const positions = nodeField.points.geometry.attributes.position.array;

  for (let i = 0; i < nodeField.count; i++) {
    const offset = i * 3;
    const phase = nodeField.phases[i];
    const speed = nodeField.driftSpeeds[i];
    const amount = nodeField.driftAmounts[i];

    const depthFactor = THREE.MathUtils.clamp(
      1 - Math.abs(positions[offset + 2] - camera.position.z) / 16,
      0,
      1
    );
    const pointerInfluence = depthFactor * 0.28;

    positions[offset] =
      nodeField.basePositions[offset] +
      Math.sin(elapsed * speed + phase) * amount +
      pointerX * pointerInfluence;

    positions[offset + 1] =
      nodeField.basePositions[offset + 1] +
      Math.cos(elapsed * speed * 0.78 + phase) * amount * 0.7 -
      pointerY * pointerInfluence;
  }

  nodeField.points.geometry.attributes.position.needsUpdate = true;
}

// dust motes rise continuously and wrap back to the bottom once past the top
function animateDustField(dustField, elapsed, deltaTime) {
  const positions = dustField.points.geometry.attributes.position.array;

  for (let i = 0; i < dustField.count; i++) {
    const offset = i * 3;
    positions[offset + 1] += dustField.speeds[i] * deltaTime;
    positions[offset] += Math.sin(elapsed * 0.35 + dustField.phases[i]) * 0.0009;

    if (positions[offset + 1] > WORLD_HEIGHT) {
      positions[offset + 1] = -WORLD_HEIGHT;
    }
  }

  dustField.points.geometry.attributes.position.needsUpdate = true;
}

function animateWireframes(wireframes, elapsed, deltaTime) {
  wireframes.objects.forEach((item) => {
    item.mesh.rotation.x += item.rotateX * deltaTime;
    item.mesh.rotation.y += item.rotateY * deltaTime;
    item.mesh.position.y = item.baseY + Math.sin(elapsed * item.floatSpeed + item.floatPhase) * 0.22;
  });
}

function animateHero(hero, elapsed) {
  hero.core.rotation.x = elapsed * 0.18;
  hero.core.rotation.y = elapsed * 0.24;
  hero.inner.rotation.x = -elapsed * 0.35;
  hero.inner.rotation.z = elapsed * 0.28;
  hero.ringOne.rotation.z = elapsed * 0.12;
  hero.ringTwo.rotation.x = elapsed * 0.09;
  hero.group.position.y = -0.2 + Math.sin(elapsed * 0.38) * 0.18;
}
