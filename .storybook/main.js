"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    "stories": [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    "addons": [
        "@chromatic-com/storybook",
        "@storybook/addon-docs",
        "@storybook/addon-a11y",
        "@storybook/addon-vitest"
    ],
    "framework": {
        "name": "@storybook/react-vite",
        "options": {}
    }
};
exports.default = config;
