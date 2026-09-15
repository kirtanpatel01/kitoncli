export type FrameworkId = "next" | "vite" | "tanstack";
export type PackageManager = "npm" | "pnpm" | "bun" | "yarn";

export interface ProjectContext {
	projectName: string;
	targetDir: string;
	framework: FrameworkId;
	packageManager: PackageManager;
}

export interface FrameworkInstaller {
	id: FrameworkId;
	label: string;
	install(context: ProjectContext): Promise<void>;
}
