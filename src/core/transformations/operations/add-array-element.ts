import { SyntaxKind } from "ts-morph";
import { project } from "../ast/parser";
import type { AddArrayElementTransformation } from "../ast/types";

export function addArrayElement(
  source: string,
  transformation: AddArrayElementTransformation
) {
  const sourceFile = project.createSourceFile(
    transformation.file,
    source,
    { overwrite: true }
  );

  const callExpressions = sourceFile.getDescendantsOfKind(
    SyntaxKind.CallExpression
  );

  const configCall = callExpressions.find(
    (call) => call.getExpression().getText() === transformation.objectName
  );

  if (!configCall) {
    throw new Error(
      `Could not find config call: ${transformation.objectName}`
    );
  }

  const argument = configCall.getArguments()[0];

  if (!argument || !argument.isKind(SyntaxKind.ObjectLiteralExpression)) {
    throw new Error(
      `${transformation.objectName} does not contain an object literal`
    );
  }

  const property = argument.getProperty(transformation.property);

  if (!property || !property.isKind(SyntaxKind.PropertyAssignment)) {
    throw new Error(
      `Could not find property: ${transformation.property}`
    );
  }

  const initializer = property.getInitializer();

  if (!initializer || !initializer.isKind(SyntaxKind.ArrayLiteralExpression)) {
    throw new Error(
      `${transformation.property} is not an array`
    );
  }

  const exists = initializer
    .getElements()
    .some((element) => element.getText() === transformation.value);

  if (!exists) {
    initializer.addElement(transformation.value);
  }

  return sourceFile.getFullText();
}