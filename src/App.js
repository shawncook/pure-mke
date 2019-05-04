import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/index";
import Header from "./components/header/index";
import Footer from "./components/footer.js/index";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
