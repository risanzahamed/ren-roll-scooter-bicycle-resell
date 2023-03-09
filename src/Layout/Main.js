import React from "react";
import { createBrowserRouter, } from "react-router-dom";
import ChooseProfile from "../Authentication/ChooseProfile";
import Customer from "../Authentication/Customer/Customer";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Seller from "../Authentication/Seller/Seller";
import AddProduct from "../CarDashboard/AddProduct/AddProduct";
import MyProduct from "../CarDashboard/MyProduct/MyProduct";
import MyBooking from "../CarDashboard/MyBooking/MyBooking";
import Home from "../Component/Home/Home";
import ProductByCategory from "../Component/Home/ProductByCategory";
import Product from "../Component/Product/Product";
import AllCustomer from "../DashBoard/AllCustomer";
import AllSeller from "../DashBoard/AllSeller";
import ProductDashboardLayout from "../DashBoard/ProductDashboardLayout";
import PrivateRoute from "../Routes/PrivateRouter";
import Payment from "../Stripe/Payment";
import Root from "./Root";
import AllUser from "../DashBoard/AllUser";
import FlagIteams from "../CarDashboard/FlagIteams/FlagIteams";
import FlagedItemData from "../CarDashboard/FlagedItemData/FlagedItemData";
import OurTopProduct from "../Component/OurTopProduct/OurTopProduct";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/customer",
        element: <Customer />,
      },
      {
        path: "/seller",
        element: <Seller />,
      },
      {
        path: "/category/:id",
        element: <ProductByCategory />,
        loader: ({ params }) => fetch(`https://ren-roll-scooter-bicycle-resell-server.vercel.app/category/${params.id}`)
      },
      {
        path: "/products",
        element: <Product />
      },
      {
        path: "/choose-profile",
        element: <PrivateRoute><ChooseProfile /></PrivateRoute>
      }


    ]

  },
  {
    path: '/dashboard',
    element: <PrivateRoute><ProductDashboardLayout /></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <MyBooking />
      },
      //   {
      //     path:'/dashboard/flags',
      //     element: <AdminRoute><FlagIteams/></AdminRoute>
      //   },
      //   {
      //     path:'/dashboard/flaged',
      //     element: <AdminRoute><FlagedItemData/></AdminRoute>,
      //   },
      //   {
      //     path:'/dashboard/allusers',
      //     element: <AdminRoute><AllUsers/></AdminRoute>,
      //   },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) => fetch(`https://ren-roll-scooter-bicycle-resell-server.vercel.app/book-product/${params.id}`)
      },
      {
        path: '/dashboard/add-product',
        element: <AddProduct />
      },
      {
        path: '/dashboard/my-product',
        element: <MyProduct />
      },
      {
        path: '/dashboard/user/customer',
        element: <AllCustomer></AllCustomer>,
        loader: () => fetch('')
      },
      {
        path: '/dashboard/user/seller',
        element: <AllSeller></AllSeller>,
        loader: () => fetch('')
      },
      {
        path: '/dashboard/allusers',
        element: <AllUser></AllUser>,
        loader: () => fetch('http://localhost:5000/user')
      },
      {
        path:'/dashboard/flags',
        element: <FlagIteams/>
      },
      {
        path:'/dashboard/flaged',
        element: <FlagedItemData/>,
      },
    ]
  }
]);

export default router