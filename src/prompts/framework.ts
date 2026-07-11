import { select } from "@clack/prompts";
import type { FrameworkId } from "../core/types.js";

export async function askFramework() {
  return (await select({
    message: "Which framework?",
    options: [
      { value: "next", label: "Next.js" },
      { value: "vite", label: "Vite React" },
      { value: "tanstack", label: "TanStack Start" },
    ],
  })) as FrameworkId;
}