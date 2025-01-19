import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface moviesState {
    nowPlayingMovies: string[],
    primaryTrailerId: string
    popularMovies: string[]
    topRatedMovies: string[];
    upcomingMovies: string[];
}

const initialState: moviesState = { nowPlayingMovies: [], primaryTrailerId: "", popularMovies: [], topRatedMovies: [], upcomingMovies: [] };

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

        addTopRatedMovies: (state: moviesState, action: PayloadAction<string[]>) => {
            state.topRatedMovies = action.payload;
        },

        addUpcomingMovies: (state: moviesState, action: PayloadAction<string[]>) => {
            state.upcomingMovies = action.payload;
        },
        removeNowPlayingMovies: (state: moviesState) => {
            state.nowPlayingMovies = [];
            state.primaryTrailerId = "";
            state.popularMovies = [];
            state.topRatedMovies = []
            state.upcomingMovies = [];
        }
    }
})

export const { addNowPlayingMovies, removeNowPlayingMovies, addMainMovieTrailerId, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;