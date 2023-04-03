import React from 'react';
import { Link } from 'react-router-dom';
    
const MyBookingCard = ({productBooked}) => {

    const {image, phone, email, category,price, model, location, paid} = productBooked
    console.log(paid);
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img class="h-80 w-full rounded-md object-cover" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-base">Product Name: {category}</h2>
                    <h2 className="text-base">Product Model : {model}</h2>
                    <h2 className="text-base">Selling Location : {location}</h2>
                    <h2 className="text-base">Your Phone : {phone}</h2>
                    <h2 className="text-base">Your Email : {email}</h2>
                    <h2 className="text-base">Product Price : {price}</h2>
                    <div className="card-actions justify-start mt-5">
                        {
                            price && !productBooked.paid && <Link to={`/dashboard/payment/${productBooked._id}`}>
                            <button className="btn btn-primary">Pay Now</button>
                            </Link>
                        }

                        {
                            price && productBooked.paid && <button className="btn btn-primary">Paid</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookingCard;