import { emptyGeoApi as api } from "./emptyApiMap";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getFastReverse: build.query<
      GetFastReverseApiResponse,
      GetFastReverseApiArg
    >({
      query: (queryArg) => ({
        url: `/fast-reverse`,
        headers: { "x-api-key": queryArg["x-api-key"] },
        params: { lat: queryArg.lat, lon: queryArg.lon },
      }),
    }),
    getReverse: build.query<GetReverseApiResponse, GetReverseApiArg>({
      query: (queryArg) => ({
        url: `/reverse`,
        headers: { "x-api-key": queryArg["x-api-key"] },
        params: { lat: queryArg.lat, lon: queryArg.lon },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as geoCodingApi };
export type GetFastReverseApiResponse =
  /** status 200 Address of point */ ReverseResponse;
export type GetFastReverseApiArg = {
  /** api key to use in map api */
  "x-api-key": string;
  /** latitude of point */
  lat: number;
  /** longitude of point */
  lon: number;
};
export type GetReverseApiResponse =
  /** status 200 Address of point */ ReverseResponse;
export type GetReverseApiArg = {
  /** api key to use in map api */
  "x-api-key": string;
  /** latitude of point */
  lat: number;
  /** longitude of point */
  lon: number;
};
export type ReverseResponse = {
  address?: string;
  address_compact?: string;
  city?: string;
  country?: string;
  county?: string;
  district?: string;
  geom?: {
    coordinates?: object;
    type?: string;
  };
  last?: string;
  name?: string;
  neighbourhood?: string;
  plaque?: string;
  poi?: string;
  postal_address?: string;
  postal_code?: string;
  primary?: string;
  province?: string;
  region?: string;
  rural_district?: string;
  village?: string;
};
export type BadRequest = {
  code?: number;
  message?: string;
  status?: number;
};
export type NotFound = {
  code?: number;
  message?: string;
  status?: number;
};
export const { useGetFastReverseQuery, useGetReverseQuery } = injectedRtkApi;
