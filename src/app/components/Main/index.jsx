/* jshint ignore:end */
import React from 'react';

import About from './About';
import Languages from './Languages';
import InCompany from './InCompany';
import Online from './Online';
import Translation from './Translation';
import Business from './Business';
import Upcoming from './Upcoming';
import Menu from "./Menu";
import Kids from "./Kids";
import Cancellation from "./Cancellation";

class Main extends React.Component {
  constructor (props){
    super(props);
    this.handlerScroll =  this.handlerScroll.bind(this);
  }
  handlerScroll(){
    // if (window.scrollY >= this.about.offsetTop-100) {this.about.classList.add("see")}
    if (window.scrollY >= this.wwd.offsetTop-100) {this.wwd.classList.add("see")}
    if (window.scrollY >= this.lan.offsetTop-100) {this.lan.classList.add("see")}
    if (window.scrollY >= this.corp.offsetTop-100) {this.corp.classList.add("see")}
    if (window.scrollY >= this.online.offsetTop-100) {this.online.classList.add("see")}
    if (window.scrollY >= this.trans.offsetTop-100) {this.trans.classList.add("see")}
    if (window.scrollY >= this.buSp.offsetTop-100) {this.buSp.classList.add("see")}
    if (window.scrollY >= this.ucEv.offsetTop-100) {this.ucEv.classList.add("see")}
    if (window.scrollY >= this.kids.offsetTop-100) {this.kids.classList.add("see")}
  }
  componentWillMount(){
    window.removeEventListener('scroll',this.handlerScroll);
  }
  componentDidMount(){
    // this.about = document.querySelector(".about-us");
    this.wwd = document.querySelector(".wwd");
    this.lan = document.querySelector(".lan");
    this.corp = document.querySelector(".corp");
    this.online = document.querySelector(".online");
    this.trans = document.querySelector(".trans");
    this.buSp = document.querySelector(".bu-sp");
    this.ucEv = document.querySelector(".uc-ev");
    this.kids = document.querySelector(".kids");

    window.addEventListener('scroll',this.handlerScroll);
  }
  render(){
    return pug`
      Menu

      About

      Languages

      InCompany

      Online

      Translation

      Kids

      Business

      Upcoming

      Cancellation
    `;
  }
};
export default Main;