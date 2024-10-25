import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import StationResponse from "../../../app/types/stationResponse";
import StationDetail from "../../../app/types/stationDetail";

export const stationsApi = createApi({
  reducerPath: "stationsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.uat-ec1.agevolt.com/charger/api/public",
  }),
  endpoints: (builder) => ({
    fetchStations: builder.query<StationResponse, { page: number; size: number }>({
      query: ({ page, size }) =>
        `/stations?page=${page}&size=${size}&sort=section.location.name,section.name,stationName`,
    }),
    fetchStationDetail: builder.query<StationDetail, string>({
      query: (id) => `/stations/${id}`,
    }),
  }),
});

export const { useFetchStationsQuery, useFetchStationDetailQuery } =
  stationsApi;
