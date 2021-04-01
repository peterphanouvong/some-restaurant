import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Restaurant from "./pages/Restaurant";
import CocktailBar from "./pages/CocktailBar";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Book from "./pages/Book";

import luxy from "luxy.js";

function App() {
  useEffect(() => {
    luxy.init({
      wrapperSpeed: 0.06,
    });
  });
  return (
    <Router>
      <Header />
      <Navigation />
      <div id="luxy">
        <Switch className="switch">
          {/* <Scrollbar> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurant" component={Restaurant} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cocktail-bar" component={CocktailBar} />
          <Route exact path="/book" component={Book} />
          {/* </Scrollbar> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
