import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	base: process.env.VITE_BASE_URL || "/",
	resolve: {
		alias: {
			"@client": path.resolve(__dirname, "./src"),
			"@server": path.resolve(__dirname, "../server/src"),
			"@shared": path.resolve(__dirname, "../shared/src"),
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
