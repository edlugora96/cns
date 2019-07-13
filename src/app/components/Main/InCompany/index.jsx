import React from 'react';
import Markdown from 'react-markdown/with-html';
import c1 from '$img/c1.svg';
import c2 from '$img/c2.svg';
import c3 from '$img/c3.svg';
import c4 from '$img/c4.svg';
const whatwedo = {
0:`
## In Company

Our in-company courses allows you to grow your confidence in business or social English while saving time since our teachers come directly to your door. We assist and prepare students for real-world situations such as business meetings, interviews, presentations, and pitches! Our teachers have experience in the business world and can prepare you for working with international clients and colleagues.
All material given in class is provided by the school and then sent to the student within 24 hours after the class.

*CNS INTERNATIONAL offers in-company courses in English, French, Portuguse, and Spanish.*

**Please see below for the cancellation policy**

`,
1:`
## En la empresa

Nuestros cursos en la empresa le permiten afianzar su confianza con el inglés de negocios o el inglés social y, a su vez, ahorrar tiempo, ya que nuestros profesores van directamente a su casa. Ayudamos y preparamos a los estudiantes para situaciones del mundo real como ¡reuniones de negocios, entrevistas, presentaciones y lanzamientos de proyectos! Nuestros profesores tienen experiencia en el mundo del negocio y pueden prepararle para trabajar con clientes internacionales y colegas de profesión.
Todo el material que se proporciona en clase va a cargo de la escuela y se envía al estudiante dentro de 24 horas después de clase.

*CNS INTERNATIONAL ofrece cursos en la empresa de inglés, francés, portugués y español.*

**Por favor consulte a continuación las condiciones de cancelación**

`,
2:`
## In Company

Our in-company courses allows you to grow your confidence in business or social English while saving time since our teachers come directly to your door. We assist and prepare students for real-world situations such as business meetings, interviews, presentations, and pitches! Our teachers have experience in the business world and can prepare you for working with international clients and colleagues.
All material given in class is provided by the school and then sent to the student within 24 hours after the class.

*CNS INTERNATIONAL offers in-company courses in English, French, Portuguse, and Spanish.*

**Please see below for the cancellation policy**

`,
3:`
## In Company

Our in-company courses allows you to grow your confidence in business or social English while saving time since our teachers come directly to your door. We assist and prepare students for real-world situations such as business meetings, interviews, presentations, and pitches! Our teachers have experience in the business world and can prepare you for working with international clients and colleagues.
All material given in class is provided by the school and then sent to the student within 24 hours after the class.

*CNS INTERNATIONAL offers in-company courses in English, French, Portuguse, and Spanish.*

**Please see below for the cancellation policy**

`,
};


const InCompany = (props) =>{
  return pug`
    section.incompanywp.corp
      .incompanywpin.section-body
        .incompany
          Markdown(source=whatwedo[props.lang], escapehtml=false)

        .section-animations
          .section-imgs
            img(src=c3)

            img(src=c1)

            img(src=c4)

            img(src=c2)
  `;
};

export default InCompany;