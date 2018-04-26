import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Block from './General/Block'

export default class AddProduct extends Component {
  render() {
      return (


        <form className="container mx-auto px-4 pt-6">

            <Link to="/products" className="mb-4 relative block text-brand hover:text-brand-dark">&larr; Terug naar producten</Link>

            <div className="flex mb-4 flex-wrap sm:flex-no-wrap items-stretch">
                  <Block stylename="w-full mb-4">
                      <span className="capitalize">Product toevoegen</span>
                  </Block>
            </div>

            <div class="flex -mx-2">

                <div class="w-1/2 px-2">
                    <div className="mb-4">
                        <input className="custom-input" type="text" name="productName" id="productName" placeholder="Product naam.." /> 
                    </div>
                </div>

                <div class="w-1/2 px-2">
                    <div className="mb-4">
                          <input className="custom-input" type="number" name="productPrice" id="productPrice" placeholder="Product prijs.." />
                    </div>
                </div>

            </div>

            <div class="flex -mx-2">

                <div class="w-1/2 px-2">
                    <div className="mb-4">
                        <select className="custom-input bg-white cursor-pointer" name="productCategorie" id="productCategorie">
                            <option value="bagels">Bagels</option>
                            <option value="sweeties">Sweeties</option>
                            <option value="smoothies">Smoothies</option>
                            <option value="hotdrinks">Hot drinks</option>
                        </select> 
                    </div>
                </div>

                <div class="w-1/2 px-2">
                    <div className="mb-4">
                          <input className="custom-input" type="text" name="productPrice" id="productPrice" placeholder="Vul ingredienten in" />
                          <p className="text-xs text-grey-dark">Druk enter om een ingredient aan te maken</p>
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
