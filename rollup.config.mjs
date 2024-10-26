import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";

export default [
    // .d.ts file build
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
//   esm build
  {
    input: "src/index.ts",
    output: {
      dir: "dist/esm",
      format: "es",
      preserveModules: true,
      sourcemap: true,
    },
    plugins: [typescript({
        outDir: 'dist/esm',
        removeComments: true
    })],
  },
//   cjs build
  {
    input: "src/index.ts",
    output: {
        dir: "dist/cjs",
        format: "cjs",
        preserveModules: true,
        sourcemap: true,
    },
    plugins: [typescript({
        outDir: 'dist/cjs',
        removeComments: true
    })],
  }
];
