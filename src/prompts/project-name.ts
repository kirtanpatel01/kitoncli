import { text } from "@clack/prompts";

export async function askProjectName() {
	const value = await text({
		message: "Where should the project be created?",
		placeholder: "my-app",
		defaultValue: ".",
	});

  return value || ".";
}
