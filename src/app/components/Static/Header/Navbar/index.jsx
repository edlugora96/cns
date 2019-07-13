/* jshint ignore:end */
import React from 'react';
import {Link} from 'react-router-dom';
import Lang from './Lang.jsx';
import menu from '$utils/Menu';
import sitemap from '$utils/Sitemap';
const Navbar = (props) => {
  return pug`
    #topbar
      a.logo(href="#")
      nav.navbar
        Link(to=sitemap.home.path)= menu[props.lang].HOME

        a(href="#")= menu[props.lang].ABOUT

        a(href="#")= menu[props.lang].COURSES

        a(href="#")= menu[props.lang].METHODOLOGY

        a(href="#")= menu[props.lang].TRANSLATION

        Link(to=sitemap.kids.path)= menu[props.lang].KIDS

        a(href="#")= menu[props.lang].CONTACT

        Lang(...props)

      a(href="#").menu-bars
        i
  `;
};
export default Navbar;