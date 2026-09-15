import type { Mapping } from "../types";

export const tailwind: Mapping = {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "styling",

    install: {
        next: {
            dependencies: [
                { package: "tailwindcss" },
                { package: "@tailwindcss/postcss" },
                { package: "postcss" },
            ],

            files: [
                {
                    source: "templates/tailwind/nextjs/postcss.config.mjs",
                    destination: "postcss.config.mjs",
                },
                {
                    source: "templates/tailwind/nextjs/globals.css",
                    destination: "app/globals.css",
                },
            ],

            transformations: [],
        },

        vite: {
            dependencies: [
                { package: "tailwindcss" },
                { package: "@tailwindcss/vite" },
            ],

            files: [],

            transformations: [
                {
                    type: "add-import",
                    file: "vite.config.ts",
                    source: "@tailwindcss/vite",
                    name: "tailwindcss",
                },
                {
                    type: "add-array-element",
                    file: "vite.config.ts",
                    objectName: "defineConfig",
                    property: "plugins",
                    value: "tailwindcss()",
                },
            ],
        },

        tanstack: {
            dependencies: [],
            files: [],
            transformations: [],
        },
    },
}
