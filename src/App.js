import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/index";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import RecyclablesDetail from "./components/recyclables/index";
import RecyclingMap from "./components/recyclingMap/index";
import Resources from "./components/resources/index";
import CategoryDetail from './components/categoryDetail/index';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path={`/item/:id`} component={RecyclablesDetail} />
          <Route exact path={`/category/:id`} component={CategoryDetail} />
          <Route exact path="/recycling-map" component={RecyclingMap} />
          <Route exact path="/resources" component={Resources} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
