import React from 'react';

const Product = () => {

    const items = ['Creamcheese', 'Gerookte zalm', 'Rode ui', 'Tomaat'];

    return (
        
        <div className="flex flex-row items-center justify-between bg-white rounded px-8 py-8 shadow-sm">

            <div className="">
                <h2 className="text-brand uppercase">New York</h2>
                <div className="ingre">
                    <p>
                    {items.map((item) => {
                        return <span className="ing text-grey-dark text-sm">{item}</span>
                    })}
                    </p>
                </div>    
            </div>

            <div className="">
                <h3 className="text-brand text-4xl">5,99</h3>
            </div>

        </div>

    );
}

export default Product;