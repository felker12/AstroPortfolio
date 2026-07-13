export const REDUCED_MOTION = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

export const TUNNEL_LENGTH = 92;
export const CAMERA_START_Z = 7;
export const CAMERA_END_PADDING = 10;
export const WORLD_WIDTH = 18;
export const WORLD_HEIGHT = 14;

export const COLORS = {
  background: 0x031423,
  fog: 0x031423,
  deepBlue: 0x082c52,
  mediumBlue: 0x0e4e87,
  brightBlue: 0x2ea3ff,
  iceBlue: 0x87d9ff,
  whiteBlue: 0xd6f4ff,
};

export function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}
