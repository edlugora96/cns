/* jshint ignore:end */
import React from 'react';
import Markdown from 'react-markdown';

const heroText = `
Moving Up your
## CARRER LADDER
TRANSLATE YOUR VISIONS INTO A REALITY
`;

const Hero = () => {
  return pug`
    .hero-text
      .text
        Markdown(source=heroText)

        .ui.button.color-change.large
          i.icon.sign-in
          |  SIGN UP AND GET A FREE TRIAL CLASS

        //- .hero-btn.ui.labeled.button(tabindex="0").color-change
        //-   .ui.green.button
        //-     i.sign-in.icon

        //-   a.ui.basic.green.left.pointing.label
        //-     |
  `;
};
export default Hero;