import React from 'react';
import Markdown from 'react-markdown/with-html';
import ta from '$img/ta.svg';
// import st from '$img/st.svg';
// import st2 from '$img/st2.svg';
const whatwedo = {
0:`
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
`,
1:`
## QUIÉNES SOMOS

Somos un equipo de docentes e instructores internacionales que nos esforzamos para convertir a nuestros clientes en profesionales multilingües. A través de los cursos a medida, les formamos para afrontar los retos reales de su trayectoria profesional.

¡Elija entre inglés, francés, portugués y español! Aprenda un nuevo idioma mientras prepara entrevistas, reuniones, lanzamientos de proyectos y presentaciones. Nuestras clases están diseñadas con la última tecnología para satisfacer las expectativas y necesidades de cada estudiante y su estilo de aprendizaje.

CNS International ofrece cursos de idiomas, talleres de negocios y actividades de formación de equipos tanto en la empresa como online, además de traducciones y clases de idiomas para niños y jóvenes adultos.
`,
2:`
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
`,
3:`
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
`,
};

const WhatWeDo = (props) =>{
  return pug`
    section.wwdwp
      .wwdwpin.section-body
        img(src=ta)

        .wwd
          Markdown(source=whatwedo[props.lang], escapehtml=false)

      //- img(src=st)

      //- img(src=st2)
  `;
};

export default WhatWeDo;