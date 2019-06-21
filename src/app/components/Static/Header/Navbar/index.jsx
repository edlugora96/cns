/* jshint ignore:end */
import React from 'react';

const Navbar = () => {
  return pug`
    #topbar
      a.logo(href="#")
      nav.navbar
        a(href="#") HOME

        a(href="#") ABOUT

        a(href="#") COURSES

        a(href="#") METHODOLOGY

        a(href="#") TRANSLATION

        a(href="#") KIDS

        a(href="#") CONTACT

      a(href="#").menu-bars
        i
  `;
};
export default Navbar;