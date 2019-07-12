/* jshint ignore:end */
import React from "react";
// import $ from "jquery";
// eslint-disable-next-line
import Carrousel from "$utils/Slick";
import { scrollTo } from 'scroll-js';

const opt = {
      dots: false,
      infinite: false,
      speed: 300,
      prevArrow: `<i class="icon slick-prev angle left big"></i>`,
      nextArrow: `<i class="icon slick-next angle right big"></i>`,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

class Menu extends React.Component {
  constructor (props){
    super(props);
    this.handlerScroll =  this.handlerScroll.bind(this);
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

  }
  handlerScroll(){

  }
  render() {
    return pug`
      Carrousel(opts=opt attr={className:'slider slider-silck'})
        a.item(onClick=()=>{scrollTo(document.body, { top: this.wwd.offsetTop })})
          i.icon.users.huge

          h6.text ABOUT US

        a.item(onClick=()=>{scrollTo(document.body, { top: this.lan.offsetTop })})
          i.icon.comments.huge

          h6.text LANGUAGES

        a.item(onClick=()=>{scrollTo(document.body, { top: this.corp.offsetTop })})
          i.icon.building.huge

          h6.text IN COMPANY

        a.item(onClick=()=>{scrollTo(document.body, { top: this.online.offsetTop })})
          i.icon.globe.huge

          h6.text ONLINE

        a.item(onClick=()=>{scrollTo(document.body, { top: this.trans.offsetTop })})
          i.icon.file.alternate.huge

          h6.text TRANSLATIONS

        a.item(onClick=()=>{scrollTo(document.body, { top: this.kids.offsetTop })})
          i.icon.rocket.huge

          h6.text KIDS

        a.item(onClick=()=>{scrollTo(document.body, { top: this.buSp.offsetTop })})
          i.icon.suitcase.huge

          h6.text BUSINESS WORKSHOPS & TEAM BUILDING
  `;
  }
};
export default Menu;