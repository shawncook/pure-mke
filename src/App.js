import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/index";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Bottle from "./components/recyclables/bottle";
import RecyclingMap from "./components/recyclingMap/index";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bottle" component={Bottle} />
          <Route exact path="/recycling-map" component={RecyclingMap} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
