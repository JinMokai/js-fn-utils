import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import terser from '@rollup/plugin-terser'

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
      entryFileNames: '[name].mjs',
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
        entryFileNames: '[name].cjs',
    },
    plugins: [typescript({
        outDir: 'dist/cjs',
        removeComments: true
    })],
  },
  // cdn build
  {
    input: "src/index.ts",
    output: [
      {
        format: 'iife',
        preserveModules: false,
        file: 'cdn/index.js',
        name: 'index',
        strict: true
      },
      {
        format: 'iife',
        preserveModules: false,
        file: 'cdn/index.min.js',
        name: 'index',
        strict: true,
        plugins: [terser()]
      },
      {
        format: 'es',
        preserveModules: false,
        name: 'index',
        file: 'cdn/index.esm.js',
        strict: true
      }
    ],
    plugins: [typescript({
        outDir: 'cdn',
        removeComments: true
    })]
  }
];
