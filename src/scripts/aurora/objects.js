import * as THREE from "three";
import { COLORS, TUNNEL_LENGTH, randomBetween } from "./constants.js";

export function createWireframeObjects() {
  const group = new THREE.Group();
  const objects = [];

  const geometries = [
    new THREE.IcosahedronGeometry(0.9, 0),
    new THREE.OctahedronGeometry(0.8, 0),
    new THREE.BoxGeometry(1.2, 1.2, 1.2),
    new THREE.TorusGeometry(0.75, 0.035, 8, 40),
  ];

  const total = 15;

  for (let i = 0; i < total; i++) {
    const geometry = geometries[i % geometries.length];
    const material = new THREE.MeshBasicMaterial({
      color: i % 3 === 0 ? COLORS.iceBlue : COLORS.brightBlue,
      wireframe: true,
      transparent: true,
      opacity: randomBetween(0.08, 0.2),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.setScalar(randomBetween(0.45, 1.2));
    mesh.position.set(
      randomBetween(-7, 7),
      randomBetween(-5.5, 5.5),
      -randomBetween(4, TUNNEL_LENGTH)
    );
    mesh.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );

    group.add(mesh);
    objects.push({
      mesh,
      rotateX: randomBetween(-0.12, 0.12),
      rotateY: randomBetween(-0.15, 0.15),
      floatPhase: Math.random() * Math.PI * 2,
      floatSpeed: randomBetween(0.15, 0.45),
      baseY: mesh.position.y,
    });
  }

  return { group, objects };
}

export function createHeroObject() {
  const group = new THREE.Group();

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.05, 1),
    new THREE.MeshBasicMaterial({
      color: COLORS.brightBlue,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  group.add(core);

  const inner = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.45, 0),
    new THREE.MeshBasicMaterial({
      color: COLORS.whiteBlue,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  group.add(inner);

  const ringMaterial = new THREE.MeshBasicMaterial({
    color: COLORS.iceBlue,
    transparent: true,
    opacity: 0.22,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const ringOne = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.018, 8, 96), ringMaterial);
  ringOne.rotation.x = Math.PI / 2.7;
  group.add(ringOne);

  const ringTwo = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.012, 8, 96), ringMaterial.clone());
  ringTwo.rotation.y = Math.PI / 2.4;
  group.add(ringTwo);

  group.position.set(3.4, -0.2, -7);
  group.scale.setScalar(0.9);

  return { group, core, inner, ringOne, ringTwo };
}
