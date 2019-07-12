import React from 'react';
import l1 from '$img/1l.png';
import l2 from '$img/2l.png';
import l3 from '$img/3l.png';
import l4 from '$img/4l.png';
// import webinar from '$img/workspace.svg';

const Languages = (props) =>{
  return pug`
    section.languageswd.lan
      .languageswdin.section-body
        .languages
          .section.text
            h2 Languages

            p TEACHING INCLUDES THE SYNTAX OF THE LANGUAGE, GRAMMAR, PHONETICS AND VOCABULARY. THE PRACTICAL ASPECT IS TAUGHT THROUGH CONVERSATION, GAMES, ORAL EXERCISES, SIMULATIONS OF REAL SITUATIONS, AND READING.

          .section.btns-improv
            .btn-improv
              img(src=l4)

              span ENGLISH

            .btn-improv
              img(src=l3)

              span FRENCH

            .btn-improv
              img(src=l2)

              span PORTUGUESE

            .btn-improv
              img(src=l1)

              span SPANISH
  `;
};

export default Languages;