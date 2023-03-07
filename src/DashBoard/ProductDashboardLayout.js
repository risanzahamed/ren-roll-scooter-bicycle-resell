import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Shared/Header';

const ProductDashboardLayout = () => {
    const { user: { role } } = useSelector(state => state.auth)
    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile max-w-screen-xl mx-auto">
                <input id="carDashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content lg:pb-14 lg:pl-14">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="carDashboardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-slate-600 text-white text-xl font-medium">

                        {
                            role === "customer" && <li>  <Link to='/dashboard'>My Orders</Link></li>
                        }


                        {
                            role === "admin" &&

                            <>
                                <li><Link to='/dashboard'>My Orders</Link></li>
                                <li><Link to='/dashboard/flaged'>Flaged</Link></li>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/user/seller'>Seller</Link></li>
                                <li><Link to='/dashboard/user/customer'>Customer</Link></li>
                            </>
                        }

                        {
                            role === "seller" &&
                            <>
                                <li><Link to='/dashboard'>My Orders</Link></li>
                                <li><Link to='/dashboard/add-product'>Add A Product</Link></li>
                                <li><Link to='/dashboard/my-product'>My Product</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default ProductDashboardLayout;