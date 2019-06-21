import React from 'react';
import Markdown from 'react-markdown/with-html';
const whatwedo = `
## Translations

We translate all technical, scientiﬁc, legal texts, and websites.

We have the best technical glossaries and advanced translation support computer systems. Our translators and proofreaders are all native speakers and devote themselves exclusively to written translation.

CNS International provides translations in the following languages: English, French, Portuguese, and Spanish.

`;


const Translation = (props) =>{
  return pug`
    .translationwp.trans
      .translation
        Markdown(source=whatwedo, escapehtml=false)
  `;
};

export default Translation;