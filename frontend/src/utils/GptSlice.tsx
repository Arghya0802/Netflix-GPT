import { createSlice } from "@reduxjs/toolkit";

interface GptState {
  showGpt: boolean;
}

const initialState: GptState = { showGpt: false };

const GptSlice = createSlice({
  name: "GPT",
  initialState,
  reducers: {
    toggleShowGPT: (state: GptState) => {
      state.showGpt = !state.showGpt;
    },
    setOriginaGPTState: (state: GptState) => {
      state.showGpt = false;
    },
  },
});

export const { toggleShowGPT, setOriginaGPTState } = GptSlice.actions;
export default GptSlice.reducer;
