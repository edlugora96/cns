import React from 'react';
import Markdown from 'react-markdown/with-html';
import t1 from '$img/t1.svg';
import t2 from '$img/t2.svg';
const whatwedo = `
## Translations

We translate all technical, scientiﬁc, legal texts, and websites.

We have the best technical glossaries and advanced translation support computer systems. Our translators and proofreaders are all native speakers and devote themselves exclusively to written translation.

*CNS International provides translations in the following languages: English, French, Portuguese, and Spanish.*

`;


const Translation = (props) =>{
  return pug`
    section.translationwp.trans
      .translationwpin.section-body
        .section-animations
          img(src=t1)

        .translation
          Markdown(source=whatwedo, escapehtml=false)

        .section-animations
          img(src=t2)
  `;
};

export default Translation;