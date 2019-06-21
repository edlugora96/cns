import React from 'react';
import logo from '$img/logo.png';
import logoShort from '$img/logo-short.png';
const Logo = () =>{
  return pug`
    picture.logo
      source(media="(max-width: 768px)", srcSet=logoShort)

      img(src=logo, alt="Buscasas")
 `;
};

export default Logo;
