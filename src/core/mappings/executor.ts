import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import type { ProjectContext } from "../types";
import { applyTransformation } from "../transformations/transformer";
import type { Mapping } from "./types";

export function applyMapping(
    mapping: Mapping,
    context: ProjectContext
) {
    const install = mapping.install[context.framework];

    if (!install) {
        return;
    }

    for (const dependency of install.dependencies ?? []) {
        console.log(
            `Install ${dependency.package}${dependency.version ? `@${dependency.version}` : ""}`
        );
    }

    for (const file of install.files ?? []) {
        const sourcePath = join(context.targetDir, file.source);
        const destinationPath = join(context.targetDir, file.destination);

        mkdirSync(dirname(destinationPath), { recursive: true });
        copyFileSync(sourcePath, destinationPath);
    }

    for (const transformation of install.transformations ?? []) {
        const filePath = join(context.targetDir, transformation.file);
        const source = readFileSync(filePath, "utf-8");

        const result = applyTransformation(source, transformation);

        writeFileSync(filePath, result);
    }
}