import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    state: false,
    name: null,
    email: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logUser: (state, action) => {
            let res = action.payload;
            state.state = true;
            state.name = res.name;
            state.email = res.email;
        },
        signOut: state => {
            state.state = false;
            state.name = null;
            state.email = null;
        },
    },
});

export const { logUser, signOut } = userSlice.actions;

export default userSlice.reducer;
