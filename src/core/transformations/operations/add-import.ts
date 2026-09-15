import { project } from "../ast/parser";
import type { AddImportTransformation } from "../ast/types";

export function addImport(
    source: string,
    transformation: AddImportTransformation
) {
    const sourceFile = project.createSourceFile(
        transformation.file,
        source,
        { overwrite: true }
    );

    const existingImport = sourceFile.getImportDeclaration(
        (declaration) =>
            declaration.getModuleSpecifierValue() === transformation.source
    );

    if (existingImport) {
        return sourceFile.getFullText();
    }

    sourceFile.addImportDeclaration({
        defaultImport: transformation.name,
        moduleSpecifier: transformation.source,
    });

    return sourceFile.getFullText();
}