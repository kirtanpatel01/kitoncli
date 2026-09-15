import type { SourceFile } from "ts-morph";

/** Returns the current formatted text of a ts-morph source file. */
export function printSource(sourceFile: SourceFile): string {
  return sourceFile.getFullText();
}
