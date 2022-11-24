const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
    name: 'auth',

    initialState: {
        currentUser: null,
        loading: false,
        error: false,
        isAdmin: false,
        token: null,
    },
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        loginSuccess: (state, { payload }) => {
            state.loading = false;
            state.currentUser = payload?.user?.username;
            state.isAdmin = payload?.user?.is_superuser;
            state.token = payload?.key;
        },
        logoutSuccess: (state) => {
            state.loading = false;
            state.currentUser = null;
            state.token = null;
        },
        registerSuccess: (state, { payload }) => {
            state.loading = false;
            state.currentUser = payload?.username;
            state.isAdmin = payload?.user?.is_superuser;
            state.token = payload?.token;
        },
        fetchFail: (state) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    fetchStart,
    loginSuccess,
    logoutSuccess,
    registerSuccess,
    fetchFail,
} = authSlice.actions;
export default authSlice.reducer;
