import React from 'react';
import l1 from '$img/1l.png';
import l2 from '$img/2l.png';
import l3 from '$img/3l.png';
import l4 from '$img/4l.png';
// import webinar from '$img/workspace.svg';
const langText = {
  0:{
    title:'Languages',
    content: 'TEACHING INCLUDES THE SYNTAX OF THE LANGUAGE, GRAMMAR, PHONETICS AND VOCABULARY. THE PRACTICAL ASPECT IS TAUGHT THROUGH CONVERSATION, GAMES, ORAL EXERCISES, SIMULATIONS OF REAL SITUATIONS, AND READING.',
    ENGLISH: 'ENGLISH',
    FRENCH: 'FRENCH',
    PORTUGUESE: 'PORTUGUESE',
    SPANISH: 'SPANISH',
  },
  1:{
    title:'Idiomas',
    content: 'LA ENSEÑANZA INCLUYE: SINTAXIS DEL IDIOMA, GRAMÁTICA, FONÉTICA Y VOCABULARIO. LOS ASPECTOS PRÁCTICOS DE LA LENGUA SE ENSEÑAN A TRAVÉS DE CONVERSACIONES, JUEGOS, EJERCICIOS ORALES, SIMULACIONES DE SITUACIONES REALES Y LECTURA.',
    ENGLISH: 'INGLÉS',
    FRENCH: 'FRANCÉS',
    PORTUGUESE: 'PORTUGUÉS',
    SPANISH: 'ESPAÑOL',
  },
  2:{
    title:'Languages',
    content: 'TEACHING INCLUDES THE SYNTAX OF THE LANGUAGE, GRAMMAR, PHONETICS AND VOCABULARY. THE PRACTICAL ASPECT IS TAUGHT THROUGH CONVERSATION, GAMES, ORAL EXERCISES, SIMULATIONS OF REAL SITUATIONS, AND READING.',
    ENGLISH: 'ENGLISH',
    FRENCH: 'FRENCH',
    PORTUGUESE: 'PORTUGUESE',
    SPANISH: 'SPANISH',
  },
  3:{
    title:'Languages',
    content: 'TEACHING INCLUDES THE SYNTAX OF THE LANGUAGE, GRAMMAR, PHONETICS AND VOCABULARY. THE PRACTICAL ASPECT IS TAUGHT THROUGH CONVERSATION, GAMES, ORAL EXERCISES, SIMULATIONS OF REAL SITUATIONS, AND READING.',
    ENGLISH: 'ENGLISH',
    FRENCH: 'FRENCH',
    PORTUGUESE: 'PORTUGUESE',
    SPANISH: 'SPANISH',
  }
};
const Languages = (props) =>{
  return pug`
    section.languageswd.lan
      .languageswdin.section-body
        .languages
          .section.text
            h2= langText[props.lang].title

            p= langText[props.lang].content

          .section.btns-improv
            .btn-improv
              img(src=l4)

              span= langText[props.lang].ENGLISH

            .btn-improv
              img(src=l3)

              span= langText[props.lang].FRENCH

            .btn-improv
              img(src=l2)

              span= langText[props.lang].PORTUGUESE

            .btn-improv
              img(src=l1)

              span= langText[props.lang].SPANISH
  `;
};

export default Languages;