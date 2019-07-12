import React from 'react';
import Markdown from 'react-markdown/with-html';
const whatwedo = `
## Business Workshops & Team Building

We offer tailor-made business workshops and team building activities for your company! Our business workshops involve coaching and training employees for real life situations including interviews, presentations, pitches, meetings, and business trips. Learn and work on a new language while building your professional skills and abilities.

Let us know if you’re interested in growing business English for your employees.

You’re also welcome to join business workshops created by CNS International.
`;
const Business = (props) =>{
  return pug`
    section.businesswp.bu-sp
      .businesswpin.section-body
        .business
          Markdown(source=whatwedo, escapehtml=false)
  `;
};

export default Business;