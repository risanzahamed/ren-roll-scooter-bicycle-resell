import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import signup from "../../../src/images/71361-sign-in.gif";
import { useRegisterMutation } from '../../Redux/features/authApi';
import { createUser } from '../../Redux/features/authSlice';

const Customer = () => {
    const dispatch = useDispatch()
    const [postCustomer, { isLoading, isError, role }] = useRegisterMutation()
    const {user : {email}} = useSelector(state => state.auth)
    const { handleSubmit, register, reset, control } = useForm({
        defaultValues :{
            email
        }
    });
    const navigate = useNavigate()
    
    const handleCreateCustomer = (data) => {
        console.log(data);
        //    dispatch(createUser({email : data.email, password : data.password}))
        
        postCustomer({ ...data, role: "customer" })
    }
   
    useEffect(() => {
        if (!isLoading && role) {
            toast.success('Customer account created successfully')
            navigate('/')
        }
    }, [isLoading, role])



    return (
        <div>
            <section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                        <div className="">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Create your customer account</h2>
                            <p className="mt-2 text-base text-gray-600">Already have an account? <Link to='/login' title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">Login</Link></p>

                            <form onSubmit={handleSubmit(handleCreateCustomer)} action="#" method="POST" className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Full Name </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="name"
                                                id=""
                                                {...register("name")}
                                                placeholder="Enter your full name"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Email address </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="email"
                                                name="email"
                                                {...register("email")}
                                                disabled
                                                id=""
                                                placeholder="Enter email to get started"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>


                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Phone </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="phone"
                                                {...register("phone")}
                                                id=""
                                                placeholder="Enter your Phone Number"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                            Create Customer account
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className="mt-3 space-y-3">
                                <button
                                    type="button"
                                    className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                >
                                    <div className="absolute inset-y-0 left-0 p-4">
                                        <svg className="w-6 h-6 text-rose-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                            ></path>
                                        </svg>
                                    </div>
                                    Sign up with Google
                                </button>

                                <button
                                    type="button"
                                    className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                >
                                    <div className="absolute inset-y-0 left-0 p-4">
                                        <svg className="w-6 h-6 text-[#2563EB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                        </svg>
                                    </div>
                                    Sign up with Facebook
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center  px-4 py-10 sm:py-16 lg:py-24  sm:px-6 lg:px-8 ">
                        <div>
                            <img className="lg:w-[900px]" src={signup} alt="" />


                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Customer;