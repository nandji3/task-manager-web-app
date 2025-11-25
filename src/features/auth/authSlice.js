import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: !!localStorage.getItem('authToken'),
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload;
            localStorage.setItem('authToken', 'demo-jwt-token-123');
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            localStorage.removeItem('authToken');
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
