import type { FrameworkInstaller } from "../core/types.js";
import { runCommand } from "../utils/run-command.js";

export const tanstackInstaller: FrameworkInstaller = {
	id: "tanstack",
	label: "TanStack Start",
	async install(context) {
		if (context.packageManager === "bun") {
			await runCommand("bunx", ["@tanstack/start@latest", context.targetDir]);
			return;
		}

		const command = context.packageManager;
		const args =
			context.packageManager === "yarn"
				? ["create", "@tanstack/start", context.targetDir]
				: ["create", "@tanstack/start@latest", context.targetDir];

		await runCommand(command, args);
	},
};