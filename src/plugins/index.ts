import type { ProjectContext, ProjectPlugin } from "../core/types.js";

export async function runPlugins(context: ProjectContext, plugins: ProjectPlugin[]) {
	for (const plugin of plugins) {
		await plugin.apply(context);
	}
}

export function getDefaultPlugins(_context: ProjectContext): ProjectPlugin[] {
	return [];
}