import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllUser = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h2 className='text-4xl'>All Customer</h2>

            <div className="overflow-x-auto mt-10">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((data, i) => <>
                                <tr
                                key={i}
                                >
                                    <th>{i + 1}</th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.role}</td>
                                </tr>

                            </>)
                        }  
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;