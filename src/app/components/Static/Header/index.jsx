/* jshint ignore:end */
import React from 'react';
import BackgroundSlider from 'react-background-slider'
import { Route, Switch, withRouter } from 'react-router-dom';
import { scrollTo } from 'scroll-js';

import Navbar from "./Navbar/";
import Hero from "./Hero/";

import sld1 from "$img/slide-1.jpg";
import sld2 from "$img/slide-2.jpg";
import sld3 from "$img/slide-3.jpg";

const backgrounds = [
  sld1,
  sld2,
  sld3
];

const Header = (props) => {
  return(
    <header id="main-header" className={props.location.pathname!=='/'?'menu-not-home':''}>
      <Switch>
        <Route exact path="/" render={()=><BackgroundSlider images={backgrounds} duration={10} transition={2} />}/>
      </Switch>
      <Navbar {...props}/>
      <Switch>
        <Route exact path="/" component={Hero}/>
      </Switch>
      <a onClick={()=>{scrollTo(document.body, { top: document.querySelector('#main-header').offsetHeight })}} href="# " className="scrollDown">
        <span></span>
      </a>
    </header>
  );
};
export default withRouter(Header);