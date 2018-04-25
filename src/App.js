// React deps
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Firebase
import base from './base';

// Custom components
import Navigation from './components/General/Navigation'

// Pages
import Index from './components/Index'
import Category from './components/Category'
import Order from './components/Order'
import PlacedOrders from './components/PlacedOrders'
import NewOrder from './components/NewOrder'

// Data
import products from './Data'
import orders from './Orders'

class App extends Component {

  constructor(props) {
    
    super(props);

    this.state = {
      products: [],
      orders: []
    }

    this.toggleIngredient = this.toggleIngredient.bind(this);
    this.getOrders = this.getOrders.bind(this);
    this.finishOrder = this.finishOrder.bind(this);
    this.addToOrders = this.addToOrders.bind(this);

  }

  toggleIngredient(i, p, v) {

    // Get the product from the state
    var product = this.state.products.find((product) => {
      return product.id == p.id
    });

    // Filter down the state array to remove the product and get new products array
    let products = this.state.products.filter((item) => {
      return item != product;
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

  addToOrders(p) {
    
    this.setState({ orders: [...this.state.orders, p] });
    
  }

  getOrders() {
    this.setState({
      orders: orders
    });
  }

  finishOrder(o) {
    
    // Filter down the state to get state without submitted order
    let orders = this.state.orders.filter((order) => {
      return order.id != o.id;
    });

    // Change completed to finish order
    o.completed = 1;

    // Push the finished order back to orders array
    orders.push(o);

    // Set array as new state
    this.setState({
      orders: orders
    });
    
  }

  componentDidMount() {
    // Sync with firebase database
    this.ref = base.syncState(`/orders`, {
      context: this,
      state: 'orders'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillMount() {
    //Fake AJAX call for products
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
              <Route exact path="/orders" render={(props) => <PlacedOrders {...props} orders={this.state.orders} />} />
              <Route exact path="/orders/:id" render={(props) => <NewOrder {...props} orders={this.state.orders} finishOrder={this.finishOrder} />} />
              <Route exact path="/:category" render={(props) => <Category {...props} products={this.state.products} />}/>
              <Route exact path="/:category/:id" render={(props) => <Order {...props} toggleIngredient={this.toggleIngredient} addToOrders={this.addToOrders} products={this.state.products} />}/>
            </Switch>

            {/* Shortcut to orders */}
            <Link to="/orders" className="no-underline">
              <div className="p-4 bg-brand text-white fixed pin-b pin-r">
                Orders
              </div>
            </Link>

          </div>
        </Router>

      </main>
    );
  }
}

export default App;
