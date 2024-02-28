import { emptyWeatherApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getVisualCrossingWebServicesRestServicesTimelineByLocation: build.query<
      GetVisualCrossingWebServicesRestServicesTimelineByLocationApiResponse,
      GetVisualCrossingWebServicesRestServicesTimelineByLocationApiArg
    >({
      query: (queryArg) => ({
        url: `/VisualCrossingWebServices/rest/services/timeline/${queryArg.location}`,
        params: {
          contentType: queryArg.contentType,
          unitGroup: queryArg.unitGroup,
          include: queryArg.include,
          lang: queryArg.lang,
          key: queryArg.key,
        },
      }),
    }),
    getVisualCrossingWebServicesRestServicesTimelineByLocationAndStartdate:
      build.query<
        GetVisualCrossingWebServicesRestServicesTimelineByLocationAndStartdateApiResponse,
        GetVisualCrossingWebServicesRestServicesTimelineByLocationAndStartdateApiArg
      >({
        query: (queryArg) => ({
          url: `/VisualCrossingWebServices/rest/services/timeline/${queryArg.location}/${queryArg.startdate}`,
          params: {
            contentType: queryArg.contentType,
            unitGroup: queryArg.unitGroup,
            include: queryArg.include,
            lang: queryArg.lang,
            key: queryArg.key,
          },
        }),
      }),
    getVisualCrossingWebServicesRestServicesTimelineByLocationAndStartdateEnddate:
      build.query<
        GetVisualCrossingWebServicesRestServicesTimelineByLocationAndStartdateEnddateApiResponse,
        GetVisualCrossingWebServicesRestServicesTimelineByLocationAndStartdateEnddateApiArg
      >({
        query: (queryArg) => ({
          url: `/VisualCrossingWebServices/rest/services/timeline/${queryArg.location}/${queryArg.startdate}/${queryArg.enddate}`,
          params: {
            contentType: queryArg.contentType,
            unitGroup: queryArg.unitGroup,
            include: queryArg.include,
            lang: queryArg.lang,
            key: queryArg.key,
          },
        }),
      }),
    getVisualCrossingWebServicesRestServicesWeatherdataForecast: build.query<
      GetVisualCrossingWebServicesRestServicesWeatherdataForecastApiResponse,
      GetVisualCrossingWebServicesRestServicesWeatherdataForecastApiArg
    >({
      query: (queryArg) => ({
        url: `/VisualCrossingWebServices/rest/services/weatherdata/forecast`,
        params: {
          sendAsDatasource: queryArg.sendAsDatasource,
          allowAsynch: queryArg.allowAsynch,
          shortColumnNames: queryArg.shortColumnNames,
          locations: queryArg.locations,
          aggregateHours: queryArg.aggregateHours,
          contentType: queryArg.contentType,
          unitGroup: queryArg.unitGroup,
          key: queryArg.key,
        },
      }),
    }),
    getVisualCrossingWebServicesRestServicesWeatherdataHistory: build.query<
      GetVisualCrossingWebServicesRestServicesWeatherdataHistoryApiResponse,
      GetVisualCrossingWebServicesRestServicesWeatherdataHistoryApiArg
    >({
      query: (queryArg) => ({
        url: `/VisualCrossingWebServices/rest/services/weatherdata/history`,
        params: {
          maxDistance: queryArg.maxDistance,
          shortColumnNames: queryArg.shortColumnNames,
          endDateTime: queryArg.endDateTime,
          aggregateHours: queryArg.aggregateHours,
          collectStationContributions: queryArg.collectStationContributions,
          startDateTime: queryArg.startDateTime,
          maxStations: queryArg.maxStations,
          allowAsynch: queryArg.allowAsynch,
          locations: queryArg.locations,
          includeNormals: queryArg.includeNormals,
          contentType: queryArg.contentType,
          unitGroup: queryArg.unitGroup,
          key: queryArg.key,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as weatherApi };
export type GetVisualCrossingWebServicesRestServicesTimelineByLocationApiResponse =
  unknown;
export type GetVisualCrossingWebServicesRestServicesTimelineByLocationApiArg = {
  /** Locaton of interest as an address, partial address or decimal latitude,longtude value */
  location: string;
  /** data format of the output either json or CSV */
  contentType?: string;
  unitGroup?: string;
  /** data to include in the output (required for CSV format - days,hours,alerts,current,events ) */
  include?: string;
  /** Language to use for weather descriptions */
  lang?: string;
  key: string;
};
export type GetVisualCrossingWebServicesRestServicesTimelineByLocationAndStartdateApiResponse =
  unknown;
export type GetVisualCrossingWebServicesRestServicesTimelineByLocationAndStartdateApiArg =
  {
    location: string;
    startdate: string;
    /** data format of the output either json or CSV */
    contentType?: string;
    unitGroup?: string;
    /** data to include in the output (required for CSV format - days,hours,alerts,current,events ) */
    include?: string;
    /** Language to use for weather descriptions */
    lang?: string;
    key: string;
  };
export type GetVisualCrossingWebServicesRestServicesTimelineByLocationAndStartdateEnddateApiResponse =
  unknown;
export type GetVisualCrossingWebServicesRestServicesTimelineByLocationAndStartdateEnddateApiArg =
  {
    location: string;
    startdate: string;
    enddate: string;
    /** data format of the output either json or CSV */
    contentType?: string;
    unitGroup?: string;
    /** data to include in the output (required for CSV format - days,hours,alerts,current,events ) */
    include?: string;
    /** Language to use for weather descriptions */
    lang?: string;
    key: string;
  };
export type GetVisualCrossingWebServicesRestServicesWeatherdataForecastApiResponse =
  unknown;
export type GetVisualCrossingWebServicesRestServicesWeatherdataForecastApiArg =
  {
    sendAsDatasource?: boolean;
    allowAsynch?: boolean;
    shortColumnNames?: boolean;
    locations?: string;
    aggregateHours?: string;
    contentType?: string;
    unitGroup?: string;
    key?: string;
  };
export type GetVisualCrossingWebServicesRestServicesWeatherdataHistoryApiResponse =
  unknown;
export type GetVisualCrossingWebServicesRestServicesWeatherdataHistoryApiArg = {
  maxDistance?: string;
  shortColumnNames?: boolean;
  endDateTime?: string;
  aggregateHours?: string;
  collectStationContributions?: boolean;
  startDateTime?: string;
  maxStations?: string;
  allowAsynch?: boolean;
  locations?: string;
  includeNormals?: boolean;
  contentType?: string;
  unitGroup?: string;
  key?: string;
};
export const {
  useGetVisualCrossingWebServicesRestServicesTimelineByLocationQuery,
  useGetVisualCrossingWebServicesRestServicesTimelineByLocationAndStartdateQuery,
  useGetVisualCrossingWebServicesRestServicesTimelineByLocationAndStartdateEnddateQuery,
  useGetVisualCrossingWebServicesRestServicesWeatherdataForecastQuery,
  useGetVisualCrossingWebServicesRestServicesWeatherdataHistoryQuery,
} = injectedRtkApi;
