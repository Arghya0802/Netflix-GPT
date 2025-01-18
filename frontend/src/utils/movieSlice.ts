import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface moviesState {
    nowPlayingMovies: string[]
}

const initialState: moviesState = { nowPlayingMovies: [] };

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addNowPlayingMovies: (state: moviesState, action: PayloadAction<string[]>) => {
            state.nowPlayingMovies = action.payload;
        },

        removeNowPlayingMovies: (state: moviesState) => {
            state.nowPlayingMovies = []
        }
    }
})

export const { addNowPlayingMovies, removeNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;