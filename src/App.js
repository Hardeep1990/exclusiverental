import "./App.css";
import React from "react";
import Header from "./components/header";
import NotFound from "./components/notfound";
import Auction from "./components/chatbot/auction";
import Home from "./components/home";
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    // <div>
    //   <Header />
    //   <Home />
    // </div>
    <React.Fragment>
      <div className="container-fluid">
        <Header />
        <div>
          <Switch>
            <Route path="/auction" component={Auction} />
            <Route path="/notFound" component={NotFound} />
            <Route path="/home" component={Home} />
            <Redirect from="/" exact to="/home" />

            <Redirect to="/notFound" />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
