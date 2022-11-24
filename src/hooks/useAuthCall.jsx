import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    fetchFail,
    fetchStart,
    loginSuccess,
    logoutSuccess,
    registerSuccess,
} from '../features/authSlice';
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify';

const useAuthCall = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const BASE_URL = 'https://14154.fullstack.clarusway.com/';

    const login = async (userInfo) => {
        dispatch(fetchStart());
        try {
            const { data } = await axios.post(
                `${BASE_URL}account/auth/login/`,
                userInfo
            );
            dispatch(loginSuccess(data));
            toastSuccessNotify('Successfully Logged in');
            navigate('/stock');
        } catch (error) {
            dispatch(fetchFail());
            toastErrorNotify('Something Went Wrong, Try Again!');
        }
    };
    const logout = async () => {
        dispatch(fetchStart());
        try {
            await axios.post(`${BASE_URL}account/auth/logout/`);
            dispatch(logoutSuccess());
            toastSuccessNotify('We will miss you!');
            navigate('/');
        } catch (error) {
            dispatch(fetchFail());
            toastErrorNotify('Something Went Wrong, Try Again!');
        }
    };

    const register = async (userInfo) => {
        dispatch(fetchStart());
        try {
            const { data } = await axios.post(
                `${BASE_URL}account/register/`,
                userInfo
            );
            dispatch(registerSuccess(data));
        } catch (error) {}
    };
    return { login, logout, register };
};

export default useAuthCall;
