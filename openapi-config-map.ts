import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "https://docs.map.ir/reverse/swagger.json",
  apiFile: "./app/_lib/store/emptyApiMap.ts",
  apiImport: "emptyGeoApi",
  outputFile: "./app/_lib/store/geoCodingApi.ts",
  exportName: "geoCodingApi",
  hooks: true,
};

export default config;
