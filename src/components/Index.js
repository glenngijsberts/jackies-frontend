// React deps
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Custom components
import Block from './General/Block'

// images
import bagel from '../img/bagel.png'
import coffee from '../img/coffee.png'
import cupcake from '../img/cupcake.png'
import fruit from '../img/fruit.png'

export default class Index extends Component {
  render() {
    return (


        <div className="container mx-auto px-4 pt-6">

        <div className="flex mb-4 flex-wrap sm:flex-no-wrap items-stretch">
            <Block stylename="w-full sm:w-1/2 sm:mr-4 mb-4" img={bagel}>
                <Link className="text-brand no-underline hover:text-brand-dark" to="/bagels">Bagels</Link>
            </Block>
            <Block stylename="w-full sm:w-1/2" img={cupcake}>
                <Link className="text-brand no-underline hover:text-brand-dark" to="/sweeties">Sweeties</Link>
            </Block>
        </div>

        <div className="flex mb-4 flex-wrap sm:flex-no-wrap items-stretch">
            <Block stylename="w-full sm:w-1/2 sm:mr-4 mb-4" img={fruit}>
                <Link className="text-brand no-underline hover:text-brand-dark" to="/smoothies">Smoothies</Link>
            </Block>
            <Block stylename="w-full sm:w-1/2" img={coffee}>
                <Link className="text-brand no-underline hover:text-brand-dark" to="/hotdrinks">Hot drinks</Link>
            </Block>
        </div>

        </div>

    );
  }
};
