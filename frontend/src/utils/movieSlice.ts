import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface moviesState {
    nowPlayingMovies: string[],
    primaryTrailerId: string
    popularMovies?: string[]
}

const initialState: moviesState = { nowPlayingMovies: [], primaryTrailerId: "", popularMovies: [] };

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addNowPlayingMovies: (state: moviesState, action: PayloadAction<string[]>) => {
            state.nowPlayingMovies = action.payload;
        },

        addMainMovieTrailerId: (state: moviesState, action: PayloadAction<string>) => {
            state.primaryTrailerId = action.payload;
        },

        addPopularMovies: (state: moviesState, action: PayloadAction<string[]>) => {
            state.popularMovies = action.payload;
        },
        removeNowPlayingMovies: (state: moviesState) => {
            state.nowPlayingMovies = [];
            state.primaryTrailerId = "";
            state.popularMovies = [];
        }
    }
})

export const { addNowPlayingMovies, removeNowPlayingMovies, addMainMovieTrailerId } = moviesSlice.actions;
export default moviesSlice.reducer;