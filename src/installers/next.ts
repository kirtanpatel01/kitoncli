import type { FrameworkInstaller } from "../core/types.js";
import { runCommand } from "../utils/run-command.js";

export const nextInstaller: FrameworkInstaller = {
	id: "next",
	label: "Next.js",
	async install(context) {
		if (context.packageManager === "bun") {
			await runCommand("bunx", ["create-next-app@latest", context.targetDir]);
			return;
		}

		const command = context.packageManager;
		const args =
			context.packageManager === "yarn"
				? ["create", "next-app", context.targetDir]
				: ["create", "next-app@latest", context.targetDir];

		await runCommand(command, args);
	},
};