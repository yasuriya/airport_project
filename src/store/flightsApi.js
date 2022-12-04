import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"

export const flightsApi = createApi({
  reducerPath: "flightsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.iev.aero/api/",
  }),
  endpoints: (builder) => ({
    flights: builder.query({
      query: (dateQry) => `flights/${dateQry}`,
    }),
  }),
})

export const { useFlightsQuery } = flightsApi
