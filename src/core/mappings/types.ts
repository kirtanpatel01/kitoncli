import type { FrameworkId } from "../types";
import type { ASTTransformation } from "../transformations/ast/types";

export type MappingCategory = "styling" | "ui" | "database" | "auth" | "other";

export interface FileCopy {
  source: string;
  destination: string;
}

export interface InstallConfig {
  dependencies?: Dependency[];
  files?: FileCopy[];
  transformations?: ASTTransformation[];
}

export interface Mapping {
  id: string;
  name: string;
  category: MappingCategory;
  install: Partial<Record<FrameworkId, InstallConfig>>;
}

export interface Dependency {
  package: string;
  version?: string;
}