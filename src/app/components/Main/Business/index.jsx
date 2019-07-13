import React from 'react';
import Markdown from 'react-markdown/with-html';
const whatwedo = {
0:`
## Business Workshops & Team Building

We offer tailor-made business workshops and team building activities for your company! Our business workshops involve coaching and training employees for real life situations including interviews, presentations, pitches, meetings, and business trips. Learn and work on a new language while building your professional skills and abilities.

Let us know if you’re interested in growing business English for your employees.

You’re also welcome to join business workshops created by CNS International.
`,
1:`
## Talleres de negocios y formación de equipos

¡Ofrecemos talleres de negocios a medida y actividades para la formación de equipos! Nuestros talleres de negocios implican asesoramiento y formación de los empleados para situaciones de la vida real incluyendo entrevistas, presentaciones, lanzamientos de proyectos, reuniones y viajes de negocios. Aprenda y trabaje en una lengua nueva mientras refuerza sus capacidades profesionales y habilidades.

Háganos saber si está interesado en los cursos de inglés de negocios para sus empleados.

También es bienvenido a unirse a nuestros talleres de negocios creados por CNS International.
`,
2:`
## Business Workshops & Team Building

We offer tailor-made business workshops and team building activities for your company! Our business workshops involve coaching and training employees for real life situations including interviews, presentations, pitches, meetings, and business trips. Learn and work on a new language while building your professional skills and abilities.

Let us know if you’re interested in growing business English for your employees.

You’re also welcome to join business workshops created by CNS International.
`,
3:`
## Business Workshops & Team Building

We offer tailor-made business workshops and team building activities for your company! Our business workshops involve coaching and training employees for real life situations including interviews, presentations, pitches, meetings, and business trips. Learn and work on a new language while building your professional skills and abilities.

Let us know if you’re interested in growing business English for your employees.

You’re also welcome to join business workshops created by CNS International.
`,
};
const Business = (props) =>{
  return pug`
    section.businesswp.bu-sp
      .businesswpin.section-body
        .business
          Markdown(source=whatwedo[props.lang], escapehtml=false)
  `;
};

export default Business;