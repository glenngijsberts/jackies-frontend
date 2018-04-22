import React from 'react';
import { Link } from 'react-router-dom';

class Order extends React.Component {

    constructor(props) {
        super(props);
    }

    handleToggle(e, item, product) {

        //Get value from checkbox and set it the opposite
        let value = e.target.checked ? 1 : 0;

        //Pass down the item (ingredient) and parent product and also the value
        this.props.toggleIngredient(item, product, value);

    }
 
    getData(e, product) {

        e.preventDefault();

        console.log(product)

    }

    render() {

        const product = this.props.products.find((product) => {
            return product.id == this.props.match.params.id;
        });

        return (

            <form className="container mx-auto px-4 pt-6" onSubmit={(e) => this.getData(e, product) }>

                <Link to={`/${this.props.match.params.category}`} className="mb-4 relative block text-brand hover:text-brand-dark">&larr; Terug naar categorie</Link>

                <div className="flex flex-row items-center justify-between bg-white rounded px-8 py-8 shadow-sm mb-4">

                    <div className="">
                        <h2 className="text-brand uppercase">{product && product.name}</h2>
                        <div className="ingre">
                            <p>
                                {product && product.ingredients.map((item) => {
                                    return <span className="ing text-grey-dark text-sm" key={item.name}>{item.name}</span>
                                })}
                            </p>
                        </div>
                    </div>

                    <div className="">
                        <h3 className="text-brand text-4xl">&euro;{product && product.price}</h3>
                    </div>

                </div>

                <div className="flex flex-wrap mb-4 -mx-2">

                    {product && product.ingredients.map((item) => {
                        return (
                            <div className="w-1/2 mb-4 px-2" key={item.name}>
                                <div className="flex flex-row items-center justify-between bg-white rounded px-8 py-8 shadow-sm">
                                    <div>
                                        <h3 className="text-grey-dark font-normal text-sm">{item.name}</h3>
                                    </div>
                                    <div>
                                        <input type="checkbox" checked={item.value} name={item} onChange={(e) => this.handleToggle(e, item, product)}/>
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

}

export default Order;