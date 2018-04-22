import React from 'react';

const Product = (props) => {

    const { ingredients } = props;

    return (
        
        <div className="flex flex-row items-center justify-between bg-white rounded px-8 py-8 shadow-sm hover:bg-grey-lighter cursor-pointer">

            <div className="">
                <h2 className="text-brand uppercase no-underline">{props.title}</h2>
                <div className="ingre">
                    <p>
                    {ingredients && ingredients.map((item) => {
                        return <span className="ing text-grey-dark text-sm" key={item.name}>{item.name}</span>
                    })}
                    </p>
                </div>    
            </div>

            <div className="">
                <h3 className="text-brand text-4xl">&euro;{props.price}</h3>
            </div>

        </div>

    );
}

export default Product;