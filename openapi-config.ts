import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile:
    "https://www.visualcrossing.com/weather/specs/visualcrossing-weather-api-openapi.yaml",
  apiFile: "./app/_lib/store/emptyApi.ts",
  apiImport: "emptyWeatherApi",
  outputFile: "./app/_lib/store/weatherApi.ts",
  exportName: "weatherApi",
  hooks: true,
};

export default config;
