import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Block from './General/Block'

export default class AddProduct extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product: {
                active: 1,
                category: 'bagels',
                completed: 0,
                id: null,
                ingredients: [],
                name: '',
                price: 0
            },
            tag: ''
        }

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.tagChange = this.tagChange.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        this.handleForm = this.handleForm.bind(this);

    }

    tagChange(e) {
        //Change the tag based on input
        this.setState({ tag: e.target.value });
    }

    handleKeyPress(e) {

        // if the event key == enter key
        if (e.keyCode === 32) {
            
            // Check if there is a ingredient supplied
            if(this.state.tag == '') {
                alert('Vul een ingredient in')
            } else {

                // Get the value of the ingredient input
                let tag = this.state.tag;

                // Copy state of just the ingredients (not the product)
                let ingredients = [...this.state.product.ingredients];

                // Create an array including only the names of the ingredients
                let names = ingredients.map((item) => {
                    return item.name;
                });

                // Check if the array already includes the ingredient
                if (names.includes(this.state.tag)) {
                    // Alert if the ingredient already exists
                    alert('Deze ingredient is al toegevoegd');
                } else {

                    // Set the ingredient with value
                    let ingredient = { name: tag, value: 1 };

                    // Push the ingredient to the ingredients array of product
                    ingredients.push(ingredient);

                    // Get the product state
                    let product = this.state.product;

                    // set the ingredients of the product object with new ingredient
                    product.ingredients = ingredients;

                    // Change and set the state of proudct and empty out the tag input (ingredient)
                    this.setState({ product: product }, () => {
                        this.setState({ tag: '' });
                    });

                }

            }

        }

    }

    handleChanges(e) {
        // Shorthand
        const target = e.target;
        // Value of specific input
        const value = target.value;
        // Name to get to the object property
        const name = target.name;

        // Copy product
        let item = {...this.state.product}
        // Set a value to specific object property  
        item[name] = value;

        // Set the state
        this.setState({
            product: item
        });
    }

    handleForm(e) {
        e.preventDefault();
        
        // Not working..
        if(e.keyCode === 32) {
            alert('Enter..') // prevent submitting further here or something
        } else {

            // Create copy of state
            let product = { ...this.state.product }

            // Function to generate random id
            function guidGenerator() {
                var S4 = function () {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                };
                return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
            }

            // Set the product id to a random id
            product.id = guidGenerator();

            // Check if required fields are filled in
            if (product.name == '' || product.price == 0 || product.ingredients.length <= 0) {
                alert('Naam, prijs en ingredienten zijn verplicht');
            } else {

                // If so, push product to parent component function
                this.props.addProduct(product);

                // Reset the state
                this.setState({
                    product: {
                        active: 1,
                        category: 'bagels',
                        completed: 0,
                        id: null,
                        ingredients: [],
                        name: '',
                        price: 0
                    },
                    tag: ''
                });

                // Route to products page
                this.props.history.push(`/products`);


            }
        }

    }

    render() {
        return (

            <form className="container mx-auto px-4 pt-6" id="form" onSubmit={(e) => this.handleForm(e)}>

                <Link to="/products" className="mb-4 relative block text-brand hover:text-brand-dark">&larr; Terug naar producten</Link>

                <div className="flex mb-4 flex-wrap sm:flex-no-wrap items-stretch">
                    <Block stylename="w-full mb-4">
                        <span className="capitalize">Product toevoegen</span>
                    </Block>
                </div>

                <div className="flex -mx-2">

                    <div className="w-1/2 px-2">
                        <div className="mb-4">
                            <input className="custom-input" type="text" name="productName" id="productName" placeholder="Product naam.." name="name" onKeyUp={this.prevent} value={this.state.product.name} onChange={this.handleChanges} /> 
                        </div>
                    </div>

                    <div className="w-1/2 px-2">
                        <div className="mb-4">
                            <input className="custom-input" type="number" name="productPrice" id="productPrice" placeholder="Product prijs.." name="price" value={this.state.product.price} onChange={this.handleChanges} />
                        </div>
                    </div>

                </div>

                <div className="flex -mx-2">

                    <div className="w-1/2 px-2">
                        <div className="mb-4">
                            <select className="custom-input bg-white cursor-pointer" name="productCategorie" id="productCategorie" name="category" value={this.state.product.category} onChange={this.handleChanges} >
                                <option value="bagels">Bagels</option>
                                <option value="sweeties">Sweeties</option>
                                <option value="smoothies">Smoothies</option>
                                <option value="hotdrinks">Hot drinks</option>
                            </select> 
                        </div>
                    </div>

                    <div className="w-1/2 px-2">
                        <div className="mb-4">
                            <input className="custom-input" type="text" name="productPrice" id="productPrice" placeholder="Vul ingredienten in" onChange={this.tagChange} onKeyDown={this.handleKeyPress} value={this.state.tag} />
                            <p className="text-xs text-grey-dark">Druk spatie om een ingredient aan te maken</p>
                            {this.state.product.ingredients.map((item) => {
                                return (
                                    <p className="text-xs text-white bg-brand rounded p-4 mt-2 mb-2 mr-2 inline-block cursor-pointer" key={item.name}>{item.name}</p>
                                );
                            })}
                        </div>
                    </div>

                </div>



                <button type="submit" className="bg-brand hover:bg-brand-dark text-white font-bold py-4 px-4 rounded mt-4">
                    Nieuw product opslaan
                </button>


            </form>

        );
    }
};
