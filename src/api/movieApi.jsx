import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { apiKey } from './movieApiKey';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com/' }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (searchTerm = 'american') =>
        `?apiKey=${apiKey}&s=${searchTerm}&type=series`,
    }),
    getSingleMovie: builder.query({
      query: (id) => `?apiKey=${apiKey}&i=${id}&Plot=full`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetSingleMovieQuery } = movieApi;
