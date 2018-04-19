import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {

    return (
        <nav className="flex items-center justify-between flex-wrap bg-brand p-6">
            <h2 className="logo text-white uppercase"><Link to="/" className="text-white no-underline">{props.logo}</Link></h2>
        </nav>  
    );

}

export default Navigation;
