import { spawn } from "child_process";

export async function runCommand(command: string, args: string[]) {
	await new Promise<void>((resolve, reject) => {
		const child = spawn(command, args, {
			stdio: "inherit",
			shell: process.platform === "win32",
		});

		child.on("error", reject);
		child.on("close", (code) => {
			if (code === 0) {
				resolve();
				return;
			}

			reject(new Error(`${command} exited with code ${code ?? "unknown"}`));
		});
	});
}