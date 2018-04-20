// React deps
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Custom components
import Block from './General/Block'
import Product from './Product'
// images
import bagel from '../img/bagel.png'
import coffee from '../img/coffee.png'
import cupcake from '../img/cupcake.png'
import fruit from '../img/fruit.png'

export default class Index extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { params } = this.props.match;

        return (


            <div className="container mx-auto px-4 pt-6">

                <Link to="/" className="mb-4 relative block text-brand hover:text-brand-dark">&larr; Terug naar overzicht</Link>

                <div className="flex mb-4 flex-wrap sm:flex-no-wrap items-stretch">
                    <Block stylename="w-full mb-4">
                        <span className="capitalize">{params.category}</span>
                    </Block>
                </div>

                <div className="flex flex-wrap -mb-4 -mx-2">
                    <div className="w-1/2 mb-4 px-2">
                        <Product />
                    </div>
                    <div className="w-1/2 mb-4 px-2">
                        <Product />
                    </div>
                    <div className="w-1/2 mb-4 px-2">
                        <Product />
                    </div>
                    <div className="w-1/2 mb-4 px-2">
                        <Product />
                    </div>
                </div>



            </div>

        );
    }
};
