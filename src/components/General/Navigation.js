import React from 'react';

const Navigation = (props) => {

    return (
        <nav className="flex items-center justify-between flex-wrap bg-brand p-6">
            <h2 className="logo text-white text-uppercase">{props.logo}</h2>
        </nav>  
    );

}

export default Navigation;
