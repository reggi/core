import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";
import path from "node:path";

await emptyDir("./npm");

const entriesI = Deno.readDir("./src")
const entries = await Array.fromAsync(entriesI)

await build({
  typeCheck: "both",
  entryPoints: [
    './src/mod.ts',
    ...entries.map(v => {
      return {
        name: path.basename(v.name, '.ts'),
        path: path.join('./src', v.name),
      }
    })
  ],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "@reggi/ideas",
    version: Deno.args[0],
    description: "A colletion of commonly used TypeScript functions for Deno / Node",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/reggi/ideas.git",
    },
    bugs: {
      url: "https://github.com/reggi/ideas/issues",
    },
  },
  // postBuild() {
  //   // steps to run after building and before running the tests
  //   Deno.copyFileSync("LICENSE", "npm/LICENSE");
  //   Deno.copyFileSync("README.md", "npm/README.md");
  // },
});