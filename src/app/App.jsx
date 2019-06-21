/* jshint ignore:end */
import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import { Redirect } from "react-router-dom";
import Header from "./components/Static/Header";
import Main from "./components/Main";
import Footer from "./components/Static/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;