import type { ASTTransformation } from "./ast/types";
import { addArrayElement, addImport, addProperty } from "./operations";

export function applyTransformation(
    source: string,
    transformation: ASTTransformation
) {
    switch (transformation.type) {
        case "add-import":
            return addImport(source, transformation);

        case "add-property":
            return addProperty(source, transformation);

        case "add-array-element":
            return addArrayElement(source, transformation);
    }
}