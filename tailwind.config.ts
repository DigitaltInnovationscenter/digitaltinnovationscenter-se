import flowbitePlugin from "flowbite/plugin";

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: "#FFF5F2",
          100: "#FFF1EE",
          200: "#FFE4DE",
          300: "#FFD5CC",
          400: "#FFBCAD",
          500: "#FE795D",
          600: "#EF562F",
          700: "#EB4F27",
          800: "#CC4522",
          900: "#A5371B",
        },
        ["primary-purple"]: {
          100: "#5500C9",
          200: "#4C00B3",
          300: "#42009C",
          400: "#390086",
          500: "#2F0070",
          600: "#260059",
          700: "#1C0043",
          800: "#13002D",
          900: "#090016",
        },
        ["secondary-purple"]: {
          100: "#9B4AFF",
        },
        ["alternative-purple"]: {
          100: "#C88AFF",
          200: "#CE97FF",
          300: "#D4A4FF",
          400: "#DAB1FF",
          500: "#E0BEFF",
          600: "#E7CBFF",
          700: "#EDD8FF",
          800: "#F3E5FF",
          900: "#F9F2FF",
        },
        ["primary-dark"]: {
          100: "#111928",
          200: "#1F2A37",
          300: "#374151",
          400: "#4B5563",
          500: "#6B7280",
          600: "#9CA3AF",
          700: "#D1D5DB",
          800: "#E5E7EB",
        },
        ["default-gray"]: {
          50: "#f9fafb",
          100: "#eeeeee",
        },
        ["primary-gray"]: {
          100: "#F9FAFB",
          200: "#F3F4F6",
          300: "#E5E7EB",
          400: "#DEE2E6",
          500: "#CED4DA",
          600: "#CED4DA",
          700: "#CED4DA",
        },
        ["misc-colors"]: {
          "progress-bg": "#DF683B",
        },
        horizon: {
          ["primary-blue"]: "#2F2FEA",
          ["secondary-blue"]: "#060693",
          ["primary-green"]: "#7EC13D",
          ["secondary-green"]: "#83C344",
          ["alternative-green"]: "#C6E4AA",
          purple: "#C88AFF",
        },
      },
    },
  },

  plugins: [flowbitePlugin],
} as Config;
