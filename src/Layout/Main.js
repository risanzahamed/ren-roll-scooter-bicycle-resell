import React from "react";
import { createBrowserRouter, } from "react-router-dom";
import ChooseProfile from "../Authentication/ChooseProfile";
import Customer from "../Authentication/Customer/Customer";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Seller from "../Authentication/Seller/Seller";
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
import AddProduct from "../productDashboard/AddProduct/AddProduct";
import MyBooking from "../productDashboard/MyBooking/MyBooking";
import MyProduct from "../productDashboard/MyProduct/MyProduct";
import FlagIteams from "../productDashboard/FlagIteams/FlagIteams"
import FlagedItemData from "../productDashboard/FlagedItemData/FlagedItemData"

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
        loader: () => fetch('https://ren-roll-scooter-bicycle-resell-server.vercel.app/user')
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