import { CodegenConfig } from "@graphql-codegen/cli";
import process from "process";
const config: CodegenConfig = {
  schema: "https://hackernewsserver-production.up.railway.app/",
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;