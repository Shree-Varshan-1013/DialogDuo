import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: null,
    accessToken: null,
    userDetails: null,
};

const globalSlice = createSlice({
    name: "Global",
    initialState,
    reducers: {
        toggleLogin: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        addUser: (state, action) => {
            state.user = action.payload;
        },
        deleteUser: (state, action) => {
            state.user = null;
        },
        addToken: (state, action) => {
            state.accessToken = action.payload;
        },
        deleteToken: (state, action) => {
            state.accessToken = null;
        },
        addUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
        deleteUserDetails: (state, action) => {
            state.userDetails = null;
        },
    },
});

export const {
    toggleLogin,
    addUser,
    deleteUser,
    addToken,
    deleteToken,
    addUserDetails,
    deleteUserDetails,
} = globalSlice.actions;

export default globalSlice.reducer;