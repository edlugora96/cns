/* jshint ignore:end */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WatchMobile from '$utils/HoC/WatchMobile';
import GlobalHandler from '$utils/HoC/GlobalHandler';
// import { Redirect } from "react-router-dom";
import Header from "./components/Static/Header";
import Main from "./components/Main";
import Kids from "./components/Main/Kids";
import Footer from "./components/Static/Footer";
import sitemap from '$utils/Sitemap';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header {...this.props}/>
          <Switch>
            <Route exact path={sitemap.home.path} render={()=><Main {...this.props}/>}/>
            <Route path={sitemap.kids.path} render={()=><Kids {...this.props} see={true}/>}/>
          </Switch>
          <Footer {...this.props}/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default WatchMobile(GlobalHandler(App));