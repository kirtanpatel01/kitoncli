import type { FrameworkInstaller } from "../core/types.js";
import { runCommand } from "../utils/run-command.js";

export const viteInstaller: FrameworkInstaller = {
	id: "vite",
	label: "Vite React",
	async install(context) {
		if (context.packageManager === "bun") {
			await runCommand("bunx", ["create-vite@latest", context.targetDir]);
			return;
		}

		const command = context.packageManager;
		const args =
			context.packageManager === "yarn"
				? ["create", "vite", context.targetDir]
				: ["create", "vite@latest", context.targetDir];

		await runCommand(command, args);
	},
};