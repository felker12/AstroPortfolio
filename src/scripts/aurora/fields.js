import * as THREE from "three";
import {
  COLORS,
  TUNNEL_LENGTH,
  WORLD_WIDTH,
  WORLD_HEIGHT,
  randomBetween,
} from "./constants.js";

export function createNodeField(count, pointTexture) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const basePositions = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  const driftSpeeds = new Float32Array(count);
  const driftAmounts = new Float32Array(count);

  const colorChoices = [
    new THREE.Color(COLORS.mediumBlue),
    new THREE.Color(COLORS.brightBlue),
    new THREE.Color(COLORS.iceBlue),
    new THREE.Color(COLORS.whiteBlue),
  ];

  for (let i = 0; i < count; i++) {
    const x = randomBetween(-WORLD_WIDTH / 2, WORLD_WIDTH / 2);
    const y = randomBetween(-WORLD_HEIGHT / 2, WORLD_HEIGHT / 2);
    const z = -Math.random() * TUNNEL_LENGTH;
    const offset = i * 3;

    positions[offset] = x;
    positions[offset + 1] = y;
    positions[offset + 2] = z;
    basePositions[offset] = x;
    basePositions[offset + 1] = y;
    basePositions[offset + 2] = z;

    const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
    colors[offset] = color.r;
    colors[offset + 1] = color.g;
    colors[offset + 2] = color.b;

    phases[i] = Math.random() * Math.PI * 2;
    driftSpeeds[i] = randomBetween(0.18, 0.55);
    driftAmounts[i] = randomBetween(0.08, 0.38);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.attributes.position.setUsage(THREE.DynamicDrawUsage);

  const material = new THREE.PointsMaterial({
    size: 0.13,
    map: pointTexture, // round sprite, not the default square point
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    alphaTest: 0.02,
    depthWrite: false,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
  });

  return {
    points: new THREE.Points(geometry, material),
    count,
    basePositions,
    phases,
    driftSpeeds,
    driftAmounts,
  };
}

// dust motes that continuously rise up through the scene, wrapping at the top
export function createDustField(count, pointTexture) {
  const positions = new Float32Array(count * 3);
  const speeds = new Float32Array(count);
  const phases = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    const offset = i * 3;
    positions[offset] = randomBetween(-WORLD_WIDTH * 0.7, WORLD_WIDTH * 0.7);
    positions[offset + 1] = randomBetween(-WORLD_HEIGHT, WORLD_HEIGHT);
    positions[offset + 2] = -Math.random() * TUNNEL_LENGTH;
    speeds[i] = randomBetween(0.1, 0.35);
    phases[i] = Math.random() * Math.PI * 2;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.attributes.position.setUsage(THREE.DynamicDrawUsage);

  const material = new THREE.PointsMaterial({
    color: COLORS.iceBlue,
    size: 0.035,
    map: pointTexture,
    transparent: true,
    opacity: 0.34,
    alphaTest: 0.02,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  return { points: new THREE.Points(geometry, material), speeds, phases, count };
}

export function createConnectionMesh(nodeField) {
  const maxConnections = 96;
  const positions = new Float32Array(maxConnections * 2 * 3);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setDrawRange(0, 0);
  geometry.attributes.position.setUsage(THREE.DynamicDrawUsage);

  const material = new THREE.LineBasicMaterial({
    color: COLORS.iceBlue,
    transparent: true,
    opacity: 0.12,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  return { lines: new THREE.LineSegments(geometry, material), maxConnections, nodeField };
}

// recomputes which nearby nodes (within camera range) should be linked by a line
export function updateConnections(connectionMesh, cameraZ) {
  const nodePositions = connectionMesh.nodeField.points.geometry.attributes.position.array;
  const linePositions = connectionMesh.lines.geometry.attributes.position.array;

  const visibleIndices = [];
  for (let i = 0; i < connectionMesh.nodeField.count; i++) {
    const z = nodePositions[i * 3 + 2];
    if (z < cameraZ - 1 && z > cameraZ - 18) visibleIndices.push(i);
  }

  let connectionCount = 0;
  const maxDistanceSquared = 5.5;

  for (let a = 0; a < visibleIndices.length; a++) {
    const offsetA = visibleIndices[a] * 3;
    for (let b = a + 1; b < visibleIndices.length; b++) {
      if (connectionCount >= connectionMesh.maxConnections) break;

      const offsetB = visibleIndices[b] * 3;
      const dx = nodePositions[offsetA] - nodePositions[offsetB];
      const dy = nodePositions[offsetA + 1] - nodePositions[offsetB + 1];
      const dz = nodePositions[offsetA + 2] - nodePositions[offsetB + 2];
      const distanceSquared = dx * dx + dy * dy + dz * dz;

      if (distanceSquared <= maxDistanceSquared) {
        const lineOffset = connectionCount * 6;
        linePositions[lineOffset] = nodePositions[offsetA];
        linePositions[lineOffset + 1] = nodePositions[offsetA + 1];
        linePositions[lineOffset + 2] = nodePositions[offsetA + 2];
        linePositions[lineOffset + 3] = nodePositions[offsetB];
        linePositions[lineOffset + 4] = nodePositions[offsetB + 1];
        linePositions[lineOffset + 5] = nodePositions[offsetB + 2];
        connectionCount++;
      }
    }
    if (connectionCount >= connectionMesh.maxConnections) break;
  }

  connectionMesh.lines.geometry.setDrawRange(0, connectionCount * 2);
  connectionMesh.lines.geometry.attributes.position.needsUpdate = true;
}
