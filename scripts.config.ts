import { DenonConfig, env } from "./deps.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run ./bootstrap/app.ts",
      desc: "run my app.ts file",
      unstable: true,
      env: env(),
      allow: [
        "net",
        "write",
        "read",
        "env",
      ],
      lock: "lock.json",
      tsconfig: "tsconfig.json",
    },
  },
};

export default config;
