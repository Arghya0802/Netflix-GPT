import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum userLang {
  english = "english",
  hindi = "hindi",
  spanish = "spanish",
}
interface movieProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface GptState {
  showGpt: boolean;
  userLanguage: userLang;
  gptMovies: movieProps[];
}

const initialState: GptState = {
  showGpt: false,
  userLanguage: userLang.english,
  gptMovies: [],
};

const GptSlice = createSlice({
  name: "GPT",
  initialState,
  reducers: {
    toggleShowGPT: (state: GptState) => {
      state.showGpt = !state.showGpt;
    },
    setOriginaGPTState: (state: GptState) => {
      state.showGpt = false;
      state.userLanguage = userLang.english;
      state.gptMovies = [];
    },
    changeUserLanguage: (state: GptState, action: PayloadAction<string>) => {
      if (action.payload === "english") state.userLanguage = userLang.english;
      else if (action.payload === "hindi") state.userLanguage = userLang.hindi;
      else state.userLanguage = userLang.spanish;
      // state.userLanguage = action.payload;
    },

    addGptRecommendedMovies: (
      state: GptState,
      action: PayloadAction<movieProps[]>
    ) => {
      state.gptMovies = action.payload;
    },

    resetGptRecommendedMovies: (state: GptState) => {
      state.gptMovies = [];
    },
  },
});

export const {
  toggleShowGPT,
  setOriginaGPTState,
  changeUserLanguage,
  addGptRecommendedMovies,
  resetGptRecommendedMovies,
} = GptSlice.actions;
export default GptSlice.reducer;
