import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { apiKey } from './movieApiKey';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com/' }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (searchTerm) => ({
        url: '/',
        params: {
          s: searchTerm,
          apikey: apiKey,
          plot: 'full',
          type: 'series',
        },
      }),
      transformResponse: (response) => response.Search,
    }),

    getSingleMovie: builder.query({
      query: (id) => ({
        url: '/',
        params: {
          i: id,
          apikey: apiKey,
          plot: 'full',
        },
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useGetSingleMovieQuery } = movieApi;
