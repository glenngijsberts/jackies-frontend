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
import Products from './components/Products'
import AddProduct from './components/AddProduct'

class App extends Component {

  constructor(props) {
    
    super(props);

    this.state = {
      products: [],
      orders: []
    }

    this.toggleIngredient = this.toggleIngredient.bind(this);
    this.finishOrder = this.finishOrder.bind(this);
    this.addToOrders = this.addToOrders.bind(this);
    this.toggleActiveProduct = this.toggleActiveProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);

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

  toggleActiveProduct(p) {
    
    // Create copy of proudcts
    let products = [...this.state.products];

    // Get the product that will change active
    let currentProduct = products.find((product) => {
      return product == p;
    });

    // If active set not active, otherwise set active
    currentProduct.active == 0 ? currentProduct.active = 1 : currentProduct.active = 0;

    // Map tho every product to see if it matches the product that will change and if so, replace it with the new product
    products.map((product) => {

      if (product.id == currentProduct.id) {
        product = currentProduct;
      }

      return product;

    });

    // Set the new array
    this.setState({products});

  }

  addToOrders(p) {
    
    this.setState({ orders: [...this.state.orders, p] });
    
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

  addProduct(p) {
    
    let products = [...this.state.products];

    products.push(p);

    this.setState({
      products: products
    });

  }

  componentDidMount() {
    // Sync with firebase database
    this.ref = base.syncState(`/orders`, {
      context: this,
      state: 'orders'
    });

    this.ref = base.syncState(`/products`, {
      context: this,
      state: 'products'
    });

  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillMount() {
    
  }

  render() {
    return (
      <main className="App font-sans">
        <Router>
          <div>

            <Navigation logo="Jackies" />
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/products" render={(props) => <Products {...props} products={this.state.products} toggleActiveProduct={this.toggleActiveProduct} />} />
              <Route exact path="/products/add" render={(props) => <AddProduct {...props} addProduct={this.addProduct} /> } />
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

            {/* Shortcut turn on/off products */}
            <Link to="/products" className="no-underline">
              <div className="p-4 bg-brand text-white fixed pin-b pin-l">
                Products
              </div>
            </Link>

          </div>
        </Router>

      </main>
    );
  }
}

export default App;
