import type { FrameworkId } from "../types";
import { mappings } from "./index";
import type { Mapping } from "./types";

export function resolveMappings(
  framework: FrameworkId,
  mappingIds: string[]
): Mapping[] {
  return mappingIds
    .map((id) => mappings.find((mapping) => mapping.id === id))
    .filter(
      (mapping): mapping is Mapping =>
        mapping !== undefined &&
        mapping.install[framework] !== undefined
    );
}