// React deps
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Custom components
import Block from './General/Block'
import Product from './Product'

export default class Products extends Component {

    constructor(props) {
        super(props);

        this.routeToAddProduct = this.routeToAddProduct.bind(this);

    }

    routeToAddProduct() {
        this.props.history.push(`/products/add`);
    }

    componentWillMount() {

    }


    render() {

        let count = this.props.products.length;

        return (


            <div className="container mx-auto px-4 pt-6">

                <Link to="/" className="mb-4 relative block text-brand hover:text-brand-dark">&larr; Terug naar menu</Link>

                <div className="flex mb-4 flex-wrap sm:flex-no-wrap items-stretch">
                    <Block stylename="w-full mb-4">
                        <span className="capitalize">Producten overzicht <span className="count text-sm text-grey-dark">({count})</span></span>
                    </Block>
                </div>

                <div className="flex flex-wrap -mb-4 -mx-2">

                    {/* Filter down products to get products of the category */}
                    {this.props.products && this.props.products.map((product) => {
                        return(
                            <div className="w-1/2 mb-4 px-2" key={product.id}>
                                <Product title={product.name} active={product.active} product={product} toggleActiveProduct={this.props.toggleActiveProduct} /> {/* This is another component */}
                            </div>
                        );
                    })}
                    
                </div>
                
                {!count > 0 &&
                <div className="bg-brand border-t border-b border-brand-dark text-white px-4 py-6" role="alert">
                    <p>Geen producten gevonden</p>
                </div>
                }

                <button className="bg-brand hover:bg-brand-dark text-white font-bold py-4 px-4 rounded mt-4" onClick={this.routeToAddProduct}>
                    Nieuw product toevoegen
                </button>


            </div>

        );
    }
};
