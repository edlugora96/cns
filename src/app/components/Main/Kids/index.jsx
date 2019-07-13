/* jshint ignore:end */
import React from 'react';
import {Helmet} from "react-helmet";
import k1 from '$img/k1.svg';
import k2 from '$img/k2.svg';
import k3 from '$img/k3.svg';
import k4 from '$img/k4.svg';

const kidsText = {
  0:{
    title:'Kids',
    content: 'We believe that learning a new language is always a wonderful idea at any age. Allow your kids to have a jumpstart in life by starting them at an earlier age. We currently provide private 1-2-1 classes to prepare kids for any upcoming exam, or simply just to practice speaking, writing, reading, and listening!',
    btn:'SIGN UP TODAY',
  },
  1:{
    title:'Niños',
    content: 'Creemos que el aprendizaje de una lengua nueva es siempre una magnífica idea a cualquier edad. Permita que sus niños den un empujón a sus vidas al empezar a una edad temprana. Actualmente proporcionamos clases privadas destinadas a preparar su próximo examen o simplemente a practicar ¡oralidad, escritura, lectura y escucha!',
    btn:'REGÍSTRATE HOY',
  },
  2:{
    title:'Kids',
    content: 'We believe that learning a new language is always a wonderful idea at any age. Allow your kids to have a jumpstart in life by starting them at an earlier age. We currently provide private 1-2-1 classes to prepare kids for any upcoming exam, or simply just to practice speaking, writing, reading, and listening!',
    btn:'SIGN UP TODAY',
  },
  3:{
    title:'Kids',
    content: 'We believe that learning a new language is always a wonderful idea at any age. Allow your kids to have a jumpstart in life by starting them at an earlier age. We currently provide private 1-2-1 classes to prepare kids for any upcoming exam, or simply just to practice speaking, writing, reading, and listening!',
    btn:'SIGN UP TODAY',
  }
};

const Kids = (props) => {
  return pug`
    if props.see
      Helmet
        title= kidsText[props.lang].title + ' | CNS'

    section.kidswp(className=props.see?"see":"")
      .kidswpin.section-body
        .kids
          h1= kidsText[props.lang].title

          .kids-section
            p= kidsText[props.lang].content

            button.ui.button.primary= kidsText[props.lang].btn

      .imgs-section-kids
        img(src=k1)

        img(src=k2)

        img(src=k3)

        img(src=k4)

      svg.uncode-row-divider.uncode-row-divider-curve(version="1.1", x="0px", y="0px", width="240px", height="24px", viewBox="0 0 240 24", enableBackground="new 0 0 240 24", xmlSpace="preserve", preserveAspectRatio="xMidYMid")
        path(fill="#0098D6", d="M119.849,0C47.861,0,0,24,0,24h240C240,24,191.855,0.021,119.849,0z")
  `;
};

export default Kids;