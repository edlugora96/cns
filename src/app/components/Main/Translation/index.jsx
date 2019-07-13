import React from 'react';
import Markdown from 'react-markdown/with-html';
import t1 from '$img/t1.svg';
import t2 from '$img/t2.svg';
const whatwedo = {
0:`
## Translations

We translate all technical, scientiﬁc, legal texts, and websites.

We have the best technical glossaries and advanced translation support computer systems. Our translators and proofreaders are all native speakers and devote themselves exclusively to written translation.

*CNS International provides translations in the following languages: English, French, Portuguese, and Spanish.*

`,
1:`
## Traducciones

Traducimos todo tipo de textos: técnicos, científicos, legales y páginas web.

Tenemos los mejores glosarios técnicos y los últimos sistemas de asistencia en traducción. Nuestros traductores y revisores son nativos y se dedican exclusivamente a la traducción.

*CNS International proporciona traducciones en las siguientes lenguas: inglés, francés, portugués y español.*

`,
2:`
## Translations

We translate all technical, scientiﬁc, legal texts, and websites.

We have the best technical glossaries and advanced translation support computer systems. Our translators and proofreaders are all native speakers and devote themselves exclusively to written translation.

*CNS International provides translations in the following languages: English, French, Portuguese, and Spanish.*

`,
3:`
## Translations

We translate all technical, scientiﬁc, legal texts, and websites.

We have the best technical glossaries and advanced translation support computer systems. Our translators and proofreaders are all native speakers and devote themselves exclusively to written translation.

*CNS International provides translations in the following languages: English, French, Portuguese, and Spanish.*

`,
};


const Translation = (props) =>{
  return pug`
    section.translationwp.trans
      .translationwpin.section-body
        .section-animations
          img(src=t1)

        .translation
          Markdown(source=whatwedo[props.lang], escapehtml=false)

        .section-animations
          img(src=t2)
  `;
};

export default Translation;