import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { movieApi } from '../../common/apis/movieApi';
import { apiKey } from '../../common/apis/movieApiKey';

const initialState = {
  movies: {},
  isLoading: true,
};

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (searchTerm) => {
    const res = await movieApi.get(
      `?apiKey=${apiKey}&s=${searchTerm}&type=series`,
    );
    return res.data;
  },
);

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.movies = payload;
      })
      .addCase(fetchAsyncMovies.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovie = (state) => state.movies.selectedMovie;
