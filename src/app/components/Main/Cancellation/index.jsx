import React from 'react';
import Markdown from 'react-markdown/with-html';
const term = {
0:`
## Cancellation Policy

We understand that things happen and that we do not always have everything under control so we allow our students to cancel their classes within 24 hours before their class. The class can be replaced at any other day or time our teachers have availability.

This policy applies to both in-company and online classes.
`,
1:`
## Condiciones de cancelación

Comprendemos que no podemos tenerlo todo bajo control y que las cosas suceden, por eso permitimos a nuestros estudiantes que cancelen sus clases con 24 horas de antelación. La clase se puede cambiar a cualquier otro día u hora en la que nuestros profesores tengan disponibilidad.

Estas condiciones se aplican tanto para las clases en la empresa como para las clases online. CNS International ofrece clases a medida y traducciones en inglés, francés, portugués y español para grupos e individuales. Nos centramos en los objetivos del estudiante y proporcionamos resultados efectivos y concretos.
`,
2:`
## Cancellation Policy

We understand that things happen and that we do not always have everything under control so we allow our students to cancel their classes within 24 hours before their class. The class can be replaced at any other day or time our teachers have availability.

This policy applies to both in-company and online classes.
`,
3:`
## Cancellation Policy

We understand that things happen and that we do not always have everything under control so we allow our students to cancel their classes within 24 hours before their class. The class can be replaced at any other day or time our teachers have availability.

This policy applies to both in-company and online classes.
`,
};


const Business = (props) =>{
  return pug`
    section.cancellationwp
      .cancellationwpin.section-body
        .cancellation
          Markdown(source=term[props.lang], escapehtml=false)
  `;
};

export default Business;