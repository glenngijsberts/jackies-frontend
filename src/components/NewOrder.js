import React from 'react';
import { Link } from 'react-router-dom';

// Custom components
import Product from './Product'

const NewOrder = (props) => {

    const order = props.orders.find((order) => {
        return order.id == props.match.params.id;
    });

    function finishOrder(e) {

        e.preventDefault();
        props.finishOrder(order);

        props.history.push(`/orders/`);

    }
    
    return (
        
        <form className="container mx-auto px-4 pt-6" onSubmit={finishOrder}>

            <Link to="/orders" className="mb-4 relative block text-brand hover:text-brand-dark">&larr; Terug naar bestellingen</Link>

            <div className="flex mb-4">
                <h3 className="uppercase text-lg text-grey-dark">{order && order.name} {order && `€${order.price}`}</h3>
            </div>

            <div className="flex flex-wrap -mb-4 -mx-2">

                {order && order.ingredients.map((item) => {

                    return(
                        <div className="w-1/2 mb-4 px-2" key={item.name}>
                            <Product title={item.name} ingredient={true} ingredientValue={item.value} price={item.price} />
                        </div>
                    );

                })}

            </div>

            {order && order.completed == 0 &&
                
                // Only visible for orders that are not completed yet
                <button type="submit" className="bg-brand hover:bg-brand-dark text-white font-bold py-4 px-4 rounded mt-4">
                    Afronden
                </button>
                
                // Create a delete button here for orders that are completed

            }

        </form>
        
    );
}

export default NewOrder;