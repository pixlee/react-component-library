import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import replace from '@rollup/plugin-replace';

import {
  terser
} from 'rollup-plugin-terser';

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  // external: ['react'],
  output: [
    // {
    //   file: packageJson.main,
    //   format: "cjs",
    //   sourcemap: true
    // },
    // {
    //   file: packageJson.module,
    //   format: "esm",
    //   sourcemap: true
    // },
    {
      compact: true,
      file: packageJson.unpkg,
      format: "iife",
      // sourcemap: true,
      name: 'ReactComponentLibrary',
      exports: 'named',
      globals: { react: 'React'}
    }
  ],
  plugins: [
    resolve(),
    // peerDepsExternal(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    commonjs({
                  include: [
                    'node_modules/react/**',
                    'node_modules/react-dom/**'
                  ]
    }),
    // copy({
    //   targets: [
    //     {
    //       src: "src/variables.scss",
    //       dest: "build",
    //       rename: "variables.scss"
    //     },
    //     {
    //       src: "src/typography.scss",
    //       dest: "build",
    //       rename: "typography.scss"
    //     }
    //   ]
    // }),
    // terser({
    //   output: {
    //     ecma: 5,
    //   },
    // }),
  ]
};
