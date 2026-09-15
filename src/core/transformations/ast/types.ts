export interface AddImportTransformation {
  type: "add-import";
  file: string;
  source: string;
  name: string;
}

export interface AddPropertyTransformation {
  type: "add-property";
  file: string;
  objectName: string;
  property: string;
  value: string;
}

export interface AddArrayElementTransformation {
  type: "add-array-element";
  file: string;
  objectName: string;
  property: string;
  value: string;
}

export type ASTTransformation =
  | AddImportTransformation
  | AddPropertyTransformation
  | AddArrayElementTransformation;
