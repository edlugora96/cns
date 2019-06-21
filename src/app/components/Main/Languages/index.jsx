import React from 'react';
import l1 from '$img/1l.png';
import l2 from '$img/2l.png';
import l3 from '$img/3l.png';
import l4 from '$img/4l.png';
// import webinar from '$img/workspace.svg';

const Languages = (props) =>{
  return pug`
    .languageswd.lan
      .languages
        .section
          h4
            img(src=l4)

            | ENGLISH

          h4
            img(src=l3)

            | FRENCH

          h4
            img(src=l2)

            | PORTUGUESE

          h4
            img(src=l1)

            | SPANISH

        .section
          h2 Languages

          p TEACHING INCLUDES THE SYNTAX OF THE LANGUAGE, GRAMMAR, PHONETICS AND VOCABULARY. THE PRACTICAL ASPECT IS TAUGHT THROUGH CONVERSATION, GAMES, ORAL EXERCISES, SIMULATIONS OF REAL SITUATIONS, AND READING.
  `;
};

export default Languages;