import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserState {
    name: string | null,
    email: string | null
}

const initialState: UserState = { name: null, email: null };

const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        addUser: (state, action: PayloadAction<UserState>) => {
            console.log(state);
            return action.payload;
        },

        removeUser: () => {
            return { name: null, email: null }
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;