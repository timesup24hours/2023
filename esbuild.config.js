import esbuild from "esbuild"
import { sassPlugin } from 'esbuild-sass-plugin'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import { stripWhitespace } from 'esbuild-minify-templates';
import manifestPlugin from 'esbuild-plugin-manifest'
import fs from "fs";
import { compile } from "sass";
import path from "path";
import { glob } from "glob";
import { aliasPath } from 'esbuild-plugin-alias-path';
import {fileURLToPath} from 'url';
const __dirname = fileURLToPath(import.meta.url);

function cleanup({ pattern = "*", safelist = [] }) {
  return {
    name: "esbuild:cleanup",
    setup(build) {
      const options = build.initialOptions;
      const safelistSet = new Set(safelist);
      build.onEnd(async (result) => {
        Object.keys(result.metafile.outputs).forEach((path) =>
          safelistSet.add(path)
        );
        const files = await glob(path.join(options.outdir, pattern));
        files.forEach((file) => {
          if (!safelistSet.has(file)) fs.unlink(file, () => {});
        })
      });
    },
  };
}

const stylePlugin = {
    name: "local-sass",
    setup(build) {
      build.onLoad({ filter: /\.local\.scss$/ }, (args) => {
        const { css } = compile(args.path);
        return { contents: css, loader: "local-css" };
        //                              ^^^^^^^^^^^
      });
      build.onEnd((result, b) => {
      })
    }
};

async function watch() {
  const ctx = await esbuild.context({
    entryPoints: [
      "frontend/index.ts",
      "frontend/styles/index.global.scss",
      "frontend/utils/theme.ts",
      // ...workerEntryPoints.map((entry) => `assets/monaco-editor/esm/${entry}`),
    ],
    minify: true,
    minifyWhitespace: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    target: "es6",
    format: 'esm',// 'iife', // cjs
    bundle: true,
    platform: 'node',
    splitting: true,
    define: {
      'process.env.NODE_ENV': '"dev"',
    },
    // chunkNames: '[dir]/[name]-[hash]',
    treeShaking: true,
    outdir: "public",
    loader: { ".ts": "ts", ".js": "ts", ".html": "text", '.ttf': 'file' },
    sourcemap: true,
    logLevel: "info",
    metafile: false,
    color: true,
    plugins: [
      stylePlugin,
      sassPlugin({
        type: "css-text",
        filter: /\.module\.scss$/,
        async transform(source, folder, file) {
          const { css } = await postcss([autoprefixer]).process(source, { from: undefined });
          return stripWhitespace(css);
        },
      }),
      sassPlugin({
        filter: /\.global\.scss$/,
        async transform(source, folder, file) {
          const { css } = await postcss([autoprefixer]).process(source, { from: undefined });
          return css;
        },
      }),
      // sassPlugin({
      //   filter: /\.local\.scss$/,
      //   type: 'style',
      //   async transform(source, folder, file) {
      //     const { css } = await postcss([autoprefixer]).process(source, { from: undefined });
      //     return css;
      //   },
      // }),

      cleanup({pattern: "*", safelist: ["public/index.html", "public/manifest.js"]}),
      manifestPlugin(),
      // aliasPath({
      //   alias: {
      //     '@component/*': path.resolve(__filename, '../frontend/components')
      //   },
      // }),
    ],
  });

  if (ctx.metafile && ctx.metafile.outputs) {
    const outputs = Object.entries(ctx.metafile.outputs).map(([key, value]) => {
      return {
        [key]: value.entryPoint
      }
    })
    await fs.writeFile('./public/metafile.json', JSON.stringify(ctx.metafile.outputs, null, 4), err => {
      if (err) throw err;
      console.log('complete');
    });
  } else {
    await ctx.watch()
  }
}
watch();