import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { movieApi } from '../../common/apis/movieApi';
import { apiKey } from '../../common/apis/movieApiKey';

const initialState = {
  movies: {},
  selectedMovie: {},
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

export const fetchAsyncSingleMovie = createAsyncThunk(
  'movies/fetchAsyncSingleMovie',
  async (id) => {
    const res = await movieApi.get(`?apiKey=${apiKey}&i=${id}&Plot=full`);
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
    removeSelectedMovie: (state) => {
      state.selectedMovie = {};
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
      })
      .addCase(fetchAsyncSingleMovie.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.selectedMovie = payload;
      });
  },
});

export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovie = (state) => state.movies.selectedMovie;
export const { addMovies } = movieSlice.actions;
export const { removeSelectedMovie } = movieSlice.actions;
