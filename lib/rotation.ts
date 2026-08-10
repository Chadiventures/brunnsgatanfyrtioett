/** Deterministic rotation in degrees from a string seed. */
export function seededRotation(seed: string, min = -3, max = 3): number {
  let hash = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  const t = (hash >>> 0) / 4294967295;
  return Math.round((min + t * (max - min)) * 100) / 100;
}
