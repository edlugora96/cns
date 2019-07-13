/* jshint ignore:end */
import React from 'react';
import {Helmet} from "react-helmet";

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
    if (window.scrollY >= this.wwd.offsetTop-100) {this.wwd.classList.add("see")}
    if (window.scrollY >= this.lan.offsetTop-100) {this.lan.classList.add("see")}
    if (window.scrollY >= this.corp.offsetTop-100) {this.corp.classList.add("see")}
    if (window.scrollY >= this.online.offsetTop-100) {this.online.classList.add("see")}
    if (window.scrollY >= this.trans.offsetTop-100) {this.trans.classList.add("see")}
    if (window.scrollY >= this.buSp.offsetTop-100) {this.buSp.classList.add("see")}
    if (window.scrollY >= this.ucEv.offsetTop-100) {this.ucEv.classList.add("see")}
    if (window.scrollY >= this.kids.offsetTop-100) {this.kids.classList.add("see")}
    if (window.scrollY >= this.cancel.offsetTop-300) {this.cancel.classList.add("see")}
  }
  componentWillMount(){
    window.removeEventListener('scroll',this.handlerScroll);
  }
  componentDidMount(){
    this.wwd = document.querySelector(".wwdwp");
    this.lan = document.querySelector(".languageswd");
    this.corp = document.querySelector(".incompanywp");
    this.online = document.querySelector(".onlinewp");
    this.trans = document.querySelector(".translationwp");
    this.buSp = document.querySelector(".businesswp");
    this.ucEv = document.querySelector(".upcomingwp");
    this.kids = document.querySelector(".kidswp");
    this.cancel = document.querySelector(".cancellationwp");

    window.addEventListener('scroll',this.handlerScroll);
  }
  render(){
    return pug`
      Helmet
        title CNS

      Menu(...this.props)

      About(...this.props)

      Languages(...this.props)

      InCompany(...this.props)

      Online(...this.props)

      Translation(...this.props)

      Kids(...this.props)

      Business(...this.props)

      Upcoming(...this.props)

      Cancellation(...this.props)
    `;
  }
};
export default Main;