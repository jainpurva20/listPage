import React from 'react';

const Container = (props) => {
    return (
        <div className="container m-auto justify-center bg-gray-200 max-w-full lg:w-1/2 p-15px pt-16 min-h-screen">
            {props.children}
        </div>
    )
}

export default Container;

