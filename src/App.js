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
              <Route exact path="/:category/:id" render={(props) => <Order {...props} products={this.state.products} />}/>
            </Switch>

          </div>
        </Router>

      </main>
    );
  }
}

export default App;
