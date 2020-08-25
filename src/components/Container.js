import React from 'react';

const Container = (props) => {
    return (
        <div className="container justify-center bg-gray-900 max-w-full p-15px pt-16 min-h-screen">
            {props.children}
        </div>
    )
}

export default Container;

