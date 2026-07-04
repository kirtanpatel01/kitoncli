import { select } from "@clack/prompts";

export async function askFramework() {
  return await select({
    message: "Which framework?",
    options: [
      { value: "next", label: "Next.js" },
      { value: "vite", label: "Vite React" },
      { value: "tanstack", label: "TanStack Start" },
    ],
  });
}