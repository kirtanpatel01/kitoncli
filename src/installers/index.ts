import type { FrameworkId, FrameworkInstaller } from "../core/types.js";
import { nextInstaller } from "./next.js";
import { tanstackInstaller } from "./tanstack.js";
import { viteInstaller } from "./vite.js";

const installers: Record<FrameworkId, FrameworkInstaller> = {
	next: nextInstaller,
	vite: viteInstaller,
	tanstack: tanstackInstaller,
};

export function getInstaller(framework: FrameworkId) {
	return installers[framework];
}