import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/styles/global.css'
import Main from './components/main'
import Authentication from './components/authentication'
import RestaurantList from "./components/restaurant_list";

function App() {
  return (
      <Router>
          <Route exact path="/" component={Main} />
          <Route path="/authentication" component={Authentication} />
          <Route path="/restaurant_list/:city/:area" component={RestaurantList} />
      </Router>
  );
}

export default App;
