import { select } from "@clack/prompts";
import type { PackageManager } from "../core/types.js";

export async function askPackageManager() {
	return (await select({
		message: "Which package manager should create the project?",
		options: [
			{ value: "npm", label: "npm" },
			{ value: "pnpm", label: "pnpm" },
			{ value: "bun", label: "bun" },
			{ value: "yarn", label: "yarn" },
		],
	})) as PackageManager;
}