import React from 'react';
import Markdown from 'react-markdown/with-html';
import o1 from '$img/o1.svg';
import o2 from '$img/o2.svg';
import o3 from '$img/o3.svg';
const whatwedo = {
0:`
## Online

We offer online courses from any part of the world. Our private online classes allow you to learn a new language from any time zone. Like our in-person courses, our online courses are tailor-made and deisgned specifically for your level. Students choose which language they want to learn, and we prepare students for both social and professional real-life situations.

All material given during the class is provided by the school and then sent to the student within 24 hours after the class.

*CNS INTERNATIONAL offers online courses in English, French, Portuguse, and Spanish.*

**Please see below for the cancellation policy**

`,
1:`
## Online

Ofrecemos cursos online desde cualquier parte del mundo. Nuestras clases privadas online le permiten aprender un nuevo idioma desde cualquier zona horaria. Del mismo modo que en nuestros cursos presenciales, nuestros cursos online están hechos a medida y diseñados específicamente para su nivel. Los estudiantes eligen la lengua que quieren aprender y les preparamos para situaciones reales tanto sociales como profesionales.

Todo el material proporcionado en la clase va a cargo de la escuela y se envía al estudiante dentro de 24 horas después de clase.

*CNS INTERNATIONAL ofrece cursos online de inglés, francés, portugués y español.*

**Por favor consulte a continuación las condiciones de cancelación**

`,
2:`
## Online

We offer online courses from any part of the world. Our private online classes allow you to learn a new language from any time zone. Like our in-person courses, our online courses are tailor-made and deisgned specifically for your level. Students choose which language they want to learn, and we prepare students for both social and professional real-life situations.

All material given during the class is provided by the school and then sent to the student within 24 hours after the class.

*CNS INTERNATIONAL offers online courses in English, French, Portuguse, and Spanish.*

**Please see below for the cancellation policy**

`,
3:`
## Online

We offer online courses from any part of the world. Our private online classes allow you to learn a new language from any time zone. Like our in-person courses, our online courses are tailor-made and deisgned specifically for your level. Students choose which language they want to learn, and we prepare students for both social and professional real-life situations.

All material given during the class is provided by the school and then sent to the student within 24 hours after the class.

*CNS INTERNATIONAL offers online courses in English, French, Portuguse, and Spanish.*

**Please see below for the cancellation policy**

`,
};

const clouds = `M0,24h240V5.194c-2.617-1.615-6.191-3.108-10.605-3.108c-9.608,0-13.076,5.393-13.076,5.393
s-3.661-2.947-8.213-0.762c-7.401,3.579-1.885,11.708-1.885,11.708s-1.104,0.161-1.543,0.742c-0.43,0.622-0.137,1.663-0.137,1.663
s-1.006-0.432-2.07-0.189c-1.084,0.271-1.191,1.233-1.191,1.233s-0.165-2.856-2.069-4.371c-3.955-2.848-7.334-0.171-7.334-0.171
s-0.558-0.611-0.946-0.771c-0.361-0.181-1.046-0.181-1.046-0.181s-4.413-3.127-10.526-2.266c-6.094,0.86-7.969,6.896-7.969,6.896
s-0.929-2.786-4.181-4.291c-4.59-2.086-6.483,0-6.483,0s1.483-3.487-2.656-5.583c-4.16-2.115-5.273,1.033-5.273,1.033
s-0.859-0.431-1.914-0.431c-1.035,0-1.855,0.933-1.855,0.933s-0.02-0.603-1.112-0.933c-1.113-0.342-1.759,0-1.759,0
s2.169-5.945-4.413-7.75c-5.548-1.574-6.543,2.276-6.798,3.499c-0.155-0.261-0.448-0.612-0.977-0.943
c-0.967-0.531-1.211-0.421-1.211-0.421s0.264-3.499-2.295-4.521c-2.559-1.042-3.545,0.932-3.545,0.932s-2.896-0.862-4.795,1.233
c-1.909,2.096-1.03,4.792-1.03,4.792s-0.791,0-1.748,0.61c-0.962,0.603-0.981,1.485-0.981,1.485s-1.68-1.044-3.96-1.044
c-2.28,0-3.77,1.044-3.77,1.044s-0.84-1.333-2.832-2.106c-1.987-0.762-3.53,0-3.53,0s1.392-5.152-5.498-7.828
C91.804-1.943,88.201,3.63,88.201,3.63s-0.879,0-1.626,0.17c-0.742,0.261-1.182,0.772-1.182,0.772s-2.422-2.365-6.26-1.584
c-3.809,0.772-4.15,4.953-4.15,4.953s-3.223-4.36-11.401-3.418c-8.11,0.863-8.848,5.213-8.848,5.213s-1.27-1.233-3.633-0.591
c-0.669,0.16-1.147,0.431-1.44,0.772c-1.079-1.765-3.096-4.181-6.118-3.86c-2.759,0.341-3.188,1.935-3.188,1.935
s-0.552-0.601-1.152-0.601h-1.23c0,0-0.581-0.772-1.699-1.223c-1.128-0.431-2.109,0-2.109,0s-2.212-1.043-4.131,0
C28.11,7.2,27.92,9.735,27.92,9.735s-1.699-1.233-3.262-0.602c-1.558,0.602-1.25,2.446-1.25,2.446s-0.498-0.34-1.528-0.18
c-1.04,0.18-1.128,0.61-1.128,0.61s-0.942-1.834-2.861-2.275c-2.021-0.431-3.75,0.181-3.75,0.181s-2.139-4.301-10.66-5.233
c-1.27-0.121-2.383-0.15-3.359-0.07L0,24L0,24z`;

const Online = (props) =>{
  return pug`
    section.onlinewp
      .onlinewpin.section-body
        .section-animations
          .section-imgs-online
            img(src=o1)

            img(src=o2)

            img(src=o3)

        .online
          Markdown(source=whatwedo[props.lang], escapehtml=false)

      svg.uncode-row-divider.uncode-row-divider-clouds(version="1.1", x="0px", y="0px", width="240px", height="24px", viewBox="0 0 240 24", enableBackground="new 0 0 240 24", xmlSpace="preserve", preserveAspectRatio="xMidYMid")
        path(fill="#ffffff", d=clouds)
  `;
};

export default Online;