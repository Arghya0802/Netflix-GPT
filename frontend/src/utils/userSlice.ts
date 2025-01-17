import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: null,

    reducers: {
        addUser: (state, action) => {
            console.log(state);
            return action.payload;
        },

        removeUser: () => {
            return null;
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;