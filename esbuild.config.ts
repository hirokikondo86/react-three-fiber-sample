import path from "path";
import { build, BuildOptions } from "esbuild";

const isDevelopment = process.env.NODE_ENV === "development";

const getOptions = () => {
  const config: BuildOptions = {
    entryPoints: [path.resolve(__dirname, "src/index.tsx")],
    bundle: true,
    minify: !isDevelopment,
    sourcemap: isDevelopment,
    watch: isDevelopment && {
      onRebuild(error, result) {
        if (error) console.error("watch build failed: ", error.errors);
        else console.log("watch build succeeded: ", result?.warnings);
      },
    },
    outdir: path.resolve(__dirname, "public"),
    tsconfig: path.resolve(__dirname, "tsconfig.json"),
  };
  return config;
};

const runBuild = async () => {
  try {
    const config = getOptions();
    await build(config);
    console.log("==================================================");
    console.log(new Date().toLocaleString() + ": watching...");
  } catch (e) {
    process.stderr.write(e.stderr);
    process.exit(1);
  }
};

runBuild();
