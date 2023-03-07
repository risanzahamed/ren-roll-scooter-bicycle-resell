import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen text-center'>
           <div className="w-16 h-16 flex border-4 border-dashed rounded-full align-middle justify-center  animate-spin dark:border-violet-400"></div>
        </div>
    );
};

export default Loading;