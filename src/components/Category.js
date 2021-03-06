// React deps
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Custom components
import Block from './General/Block'
import Product from './Product'

export default class Category extends Component {

    constructor(props) {
        super(props);
        this.routeToProduct = this.routeToProduct.bind(this);
    }

    componentWillMount() {

    }

    routeToProduct(id) {
        this.props.history.push(`/${this.props.match.params.category}/${id}`);
    }

    render() {

        const { params } = this.props.match;
        let count = 0;

        return (


            <div className="container mx-auto px-4 pt-6">

                <Link to="/" className="mb-4 relative block text-brand hover:text-brand-dark">&larr; Terug naar overzicht</Link>

                <div className="flex mb-4 flex-wrap sm:flex-no-wrap items-stretch">
                    <Block stylename="w-full mb-4">
                        <span className="capitalize">{params.category}</span>
                    </Block>
                </div>

                <div className="flex flex-wrap -mb-4 -mx-2">

                    {/* Filter down products to get products of the category */}
                    {this.props.products && this.props.products.filter((product) => {

                        return product.category == params.category;

                    {/* Filter down products to get active products */}
                    }).filter((product) => {

                        return product.active == 1;
                    
                    {/* Return for each product a component, count + 1 to make sure there are products in this category */}
                    }).map((product) => {

                        count++;

                        return(
                            <div className="w-1/2 mb-4 px-2" key={product.id} onClick={() => this.routeToProduct(product.id)}>
                                <Product title={product.name} ingredients={product.ingredients} price={product.price} /> {/* This is another component */}
                            </div>
                        );
                    })}
                    
                </div>
                
                {/* No products means count == 0 so there will be a message */}
                {!count > 0 &&
                <div className="bg-brand border-t border-b border-brand-dark text-white px-4 py-6" role="alert">
                    <p>Geen producten gevonden</p>
                </div>
                }



            </div>

        );
    }
};
