import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "hsl(var(--primary-color))",
                accent: "hsl(var(--accent-color))"
            }
        }
    }
} satisfies Config;
