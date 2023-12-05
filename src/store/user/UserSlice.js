import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    state: false,
    name: null,
    email: null,
    photo: null,
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
            state.photo = res.photo
        },
        signOut: state => {
            state.state = false;
            state.name = null;
            state.email = null;
            state.photo = null;
        },
    },
});

export const { logUser, signOut } = userSlice.actions;

export default userSlice.reducer;
