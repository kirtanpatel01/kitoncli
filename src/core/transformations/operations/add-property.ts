import { SyntaxKind } from "ts-morph";
import { project } from "../ast/parser";
import type { AddPropertyTransformation } from "../ast/types";

export function addProperty(
    source: string,
    transformation: AddPropertyTransformation
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

    const existingProperty = argument.getProperty(
        transformation.property
    );

    if (existingProperty) {
        return sourceFile.getFullText();
    }

    argument.addPropertyAssignment({
        name: transformation.property,
        initializer: transformation.value,
    });

    return sourceFile.getFullText();
}