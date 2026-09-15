import { intro, outro } from "@clack/prompts";
import pc from "picocolors";
import path from "path";
import { askFramework } from "./prompts/framework.js";
import { askPackageManager } from "./prompts/package-manager.js";
import { askProjectName } from "./prompts/project-name.js";
import { getInstaller } from "./installers/index.js";
import { applyMapping, mappings } from "./core/mappings/index.js";

intro(pc.green("🚀 Welcome to KitonCLI"));

const framework = await askFramework();
const packageManager = await askPackageManager();
const projectName = await askProjectName();
const targetDir = projectName as string;
const resolvedProjectName =
	targetDir === "." ? path.basename(process.cwd()) : path.basename(targetDir);
const context = {
	projectName: resolvedProjectName,
	targetDir,
	framework,
	packageManager,
};

const installer = getInstaller(framework);

await installer.install(context);

for (const mapping of mappings) {
	applyMapping(mapping, context);
}

outro(pc.green("Done!"));
