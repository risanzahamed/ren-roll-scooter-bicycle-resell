import React from 'react';
import { Link } from 'react-router-dom';
import signin from "../../src/images/71361-sign-in.gif";
import signinRed from "../../src/images/94006-sign-in-red.gif"

const ChooseProfile = () => {
    return (
        <div>
            <section className="">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <Link to="/customer">
                        <div className="flex border lg:m-24 m-8 items-center justify-center  ">
                            <div className="flex items-center justify-center ">
                                <div>
                                    <img className="w-full mx-auto" src={signin} alt="" />

                                    <div className="w-full max-w-md mx-auto xl:max-w-xl pb-24">
                                        <h3 className="text-3xl font-semibold font-serif text-center text-black">Register in as a Customer</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="flex border lg:m-24 m-8 items-center justify-center ">

                        <Link to="/seller">
                            <div className="flex items-center justify-center ">
                                <div>
                                    <img className="w-full mx-auto" src={signinRed} alt="" />

                                    <div className="w-full max-w-md mx-auto xl:max-w-xl pb-24">
                                        <h3 className="text-3xl font-semibold font-serif text-center text-black">Register as a Seller</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default ChooseProfile;