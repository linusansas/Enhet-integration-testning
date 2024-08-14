import react from "@vitejs/plugin-react-swc";
import { defineConfig, coverageConfigDefaults } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: "jsdom",
        setupFiles: ["src/test-setup.ts"],
        coverage: { provider: "v8", exclude: [...coverageConfigDefaults.exclude, "src/main.tsx"] },
    },
});
