// React deps
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Custom components
import Navigation from './components/General/Navigation'

// Pages
import Index from './components/Index'
import Category from './components/Category'

class App extends Component {
  render() {
    return (
      <main className="App font-sans">
        <Router>
          <div>

            <Navigation logo="Jackies" />
            <Route exact path="/" component={Index} />
            <Route exact path="/:category" render={(props) => <Category {...props} />}/>

          </div>
        </Router>

      </main>
    );
  }
}

export default App;
