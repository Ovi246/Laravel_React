import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
        setToken: (state, userToken) => {
            state.token = userToken;
        },
        setUser: (state, user) => {
            state.user = user;
        },
    },
});

export const { setToken, setUser } = authSlice.actions;
export default authSlice.reducer;
