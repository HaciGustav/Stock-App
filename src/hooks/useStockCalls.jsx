import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchStart, getSuccess } from '../features/stockSlice';
import useAxios from './useAxios';

const useStockCalls = () => {
    const dispatch = useDispatch();
    const { axiosWithToken } = useAxios;

    //! MAIN CALL
    const getStockData = async (url) => {
        dispatch(fetchStart());

        try {
            const { data } = axiosWithToken.get(`/stock/${url}`);
            dispatch(getSuccess(data, url));
        } catch (error) {
            dispatch(fetchFail());
            console.log(error);
        }
    };

    //! GET CALLS

    const getFirms = getStockData('firms');
    const getCategories = getStockData('categories');
    const getProducts = getStockData('products');
    const getSales = getStockData('sales');
    const getBrands = getStockData('brands');

    //! DELETE CALLS

    return {};
};

export default useStockCalls;
