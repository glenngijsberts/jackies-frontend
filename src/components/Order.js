import React from 'react';
import { Link } from 'react-router-dom';

const Order = () => {

    const items = ['Creamcheese', 'Gerookte zalm', 'Rode ui', 'Tomaat'];

    return (

            <form className="container mx-auto px-4 pt-6">

            <Link to="/" className="mb-4 relative block text-brand hover:text-brand-dark">&larr; Terug naar categorie</Link>

                <div className="flex flex-row items-center justify-between bg-white rounded px-8 py-8 shadow-sm mb-4">

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

                <div className="flex flex-wrap mb-4 -mx-2">

                    {items.map((item) => {
                        return(
                            <div class="w-1/2 mb-4 px-2">
                                <div className="flex flex-row items-center justify-between bg-white rounded px-8 py-8 shadow-sm">
                                    <div>
                                        <h3 className="text-grey-dark font-normal text-sm">{item}</h3>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="ingredient" checked/>
                                    </div>
                                </div>
                            </div>  
                        );
                    })}

                </div>

            <button type="submit" className="bg-brand hover:bg-brand-dark text-white font-bold py-4 px-4 rounded">
                Order this product
            </button>

            </form>

    );
}

export default Order;