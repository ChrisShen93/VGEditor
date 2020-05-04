const fs = require('fs');
const rollup = require('rollup');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const babel = require('rollup-plugin-babel');
const { terser } = require('rollup-plugin-terser');

fs.rmdirSync('dist', { recursive: true });

build();

async function build() {
  const bundle = await rollup.rollup({
    input: 'src/index.ts',
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
      babel({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      terser(),
    ],
  });

  for (const format of ['esm', 'cjs', 'umd']) {
    await bundle.write({
      name: 'VGEditor',
      file: `dist/index.${format}.js`,
      format,
      exports: 'named',
    });
  }
}
