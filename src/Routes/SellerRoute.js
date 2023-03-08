import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';
import UseSeller from './UseSeller';

const SellerRoute = ({children}) => {
   
    const { isLoading, user } = useSelector(state => state.auth)

    const [isSeller, isSellerLoading] = UseSeller(user?.email)
    const location = useLocation();

    if(isLoading || isSellerLoading){
        return <Loading/>
    }

    if (user && isSeller){
        return children;
    }
    return <Navigate to="/home" state={{from: location}} replace></Navigate>;
};

export default SellerRoute;