import typescript from "rollup-plugin-typescript";

export default {
    input: "src/money.ts",
    output: [
        {
            file: "lib/bundle.cjs.js",
            format: "cjs",
        },
        {
            file: "lib/bundle.esm.js",
            format: "esm",
        },
    ],
    plugins: [
        typescript({
            exclude: "node_modules/**",
            typescript: require("typescript"),
        }),
    ],
};
