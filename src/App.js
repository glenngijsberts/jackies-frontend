// React deps
import React, { Component } from 'react';

// Custom components
import Navigation from './components/General/Navigation'
import Block from './components/General/Block'

// images
import bagel from './img/bagel.png'
import coffee from './img/coffee.png'
import cupcake from './img/cupcake.png'
import fruit from './img/fruit.png'

class App extends Component {
  render() {
    return (
      <main className="App font-sans">

        <Navigation logo="Jackies" />

        <div className="container mx-auto px-4 pt-6">
          
          <div class="flex mb-4 flex-wrap sm:flex-no-wrap items-stretch">
            <Block title="Bagels" stylename="w-full sm:w-1/2 sm:mr-4 mb-4" img={bagel} />
            <Block title="Sweeties" stylename="w-full sm:w-1/2" img={cupcake} />
          </div>

          <div class="flex mb-4 flex-wrap sm:flex-no-wrap items-stretch">
            <Block title="Smoothies" stylename="w-full sm:w-1/2 sm:mr-4 mb-4" img={fruit} />
            <Block title="Hot drinks" stylename="w-full sm:w-1/2" img={coffee} />
          </div>

        </div>

      </main>
    );
  }
}

export default App;
