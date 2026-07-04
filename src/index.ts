import { intro, outro, select } from "@clack/prompts";
import pc from "picocolors";
import { askFramework } from "./prompts/framework.js";
import { askProjectName } from "./prompts/project-name.js";
import { createProject } from "./generators/create-porject.js";

intro(pc.green("🚀 Welcome to KitonCLI"));

await askFramework();
const projectName = await askProjectName();
await createProject(projectName as string);

outro(pc.green("Done!"));