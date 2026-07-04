import fs from "fs-extra";
import path from "path";

export async function createProject(targetDir: string) {
  await fs.ensureDir(targetDir);

  const projectName =
    targetDir === "."
      ? path.basename(process.cwd())
      : path.basename(targetDir);

  await fs.writeFile(
    path.join(targetDir, "README.md"),
    `# ${projectName}`
  );

  
  await fs.writeJson(
    path.join(targetDir, "package.json"),
    {
      name: projectName,
      private: true,
    },
    { spaces: 2 }
  );
}