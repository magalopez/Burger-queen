import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";

import "firebase/firestore";

import Navbar from "./components/Navbar";
import MenuView from "./pages/Menu";
import KitchenView from "./pages/Kitchen";
import HistoryView from "./pages/OrdersHistory";
import Default from "./pages/Default";
import HomeView from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/menu" component={MenuView} />
        <Route path="/cocina" component={KitchenView} />
        <Route path="/historial" component={HistoryView} />
        <Route component={Default} />
      </Switch>
    </Router>
  );
};

export default App;
