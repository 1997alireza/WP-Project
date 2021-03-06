import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './assets/styles/global.css'
import Main from './components/main'
import Authentication from './components/authentication'
import RestaurantList from './components/restaurant_list/restaurant_list';
import RestaurantPage from "./components/restaurant_page/restaurant_page";

function App() {
  return (
      <Router>
          <Route exact path="/" component={Main} />
          <Route path="/authentication" component={Authentication} />
          <Route path="/restaurant_list/:city/:area" component={RestaurantList} />
          <Route path="/restaurant/:id" component={RestaurantPage} />
      </Router>
  );
}

export default App;