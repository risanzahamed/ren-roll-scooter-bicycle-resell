import React from 'react';
import toast from 'react-hot-toast';

const FlagIteams = ({flag}) => {

    const { image, model, categoryName, description, resalePrice, originalPrice, postDate, yearsOfUse, location } = flag


    const flagedCollection = {
        image,
        model,
        categoryName,
        description, 
        resalePrice, 
        originalPrice, 
        postDate, 
        yearsOfUse, 
        location
    }

    fetch('https://ren-roll-scooter-bicycle-resell-server.vercel.app/flag-items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(flagedCollection)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('product Flaged Successfull')
                    console.log('inside post',data);
                    return true
                }
                else {
                    toast.success(data.message)
                }
            })
    return (
        <div>
           

        </div>
    );
};

export default FlagIteams;