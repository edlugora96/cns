import React from 'react';
import Markdown from 'react-markdown/with-html';
const whatwedo = `
## ABOUT US

We are a team of global teachers and coaches who strive to develop
the growth of our clients to multilingual professionals. Through
innovative tailor-made courses, we are ready to equip you for reallife
challenges in your career.

Choose between English, French, Portuguese, and Spanish!
Learn a new language while preparing for interviews, meetings,
pitches, and presentations. Our classes are designed with advanced
technological tools to meet the expectations and necessities of each
student and their learning style.

CNS International offers in-company and online languages courses,
business workshops and team-building activities, translations, and
language classes for children and young adults.
`;


const WhatWeDo = (props) =>{
  return pug`
    .wwdwp
      .wwd
        Markdown(source=whatwedo, escapehtml=false)
  `;
};

export default WhatWeDo;