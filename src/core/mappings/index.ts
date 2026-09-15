import { tailwind } from "./technologies/tailwind";
import type { Mapping } from "./types";

export const mappings: Mapping[] = [
  tailwind,
];

export { resolveMappings } from "./resolver";
export { applyMapping } from "./executor";