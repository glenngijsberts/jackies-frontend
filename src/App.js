// React deps
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Custom components
import Navigation from './components/General/Navigation'

// Pages
import Index from './components/Index'
import Category from './components/Category'
import Order from './components/Order'

// Data
import products from './Data'

class App extends Component {

  constructor(props) {
    
    super(props);

    this.state = {
      products: []
    }

    this.toggleIngredient = this.toggleIngredient.bind(this);

  }

  toggleIngredient(i, p, v) {

    // Get the product from the state
    var product = this.state.products.find((product) => {
      return product.id == p.id
    });

    // Filter down the state array to remove the product and get new products array
    let products = this.state.products.filter((product) => {
      return product != product;
    });

    // Get the ingredient object 
    var object = product.ingredients.find((product) => {
      return product == i;
    });
    
    // Set the value for the ingredient, either true or false (depends on checkbox state)
    object.value = v;

    // Push the edited product the array of products
    products.push(product);

    // Set the state with the new products array
    this.setState({
      products
    });

  }

  componentWillMount() {

    setTimeout(() => {
      this.setState({products});
    }, 100);
    
  }

  render() {
    return (
      <main className="App font-sans">
        <Router>
          <div>

            <Navigation logo="Jackies" />
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/:category" render={(props) => <Category {...props} products={this.state.products} />}/>
              <Route exact path="/:category/:id" render={(props) => <Order {...props} toggleIngredient={this.toggleIngredient} products={this.state.products} />}/>
            </Switch>

          </div>
        </Router>

      </main>
    );
  }
}

export default App;
