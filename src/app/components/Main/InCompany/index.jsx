import React from 'react';
import Markdown from 'react-markdown/with-html';
import c1 from '$img/c1.svg';
import c2 from '$img/c2.svg';
import c3 from '$img/c3.svg';
import c4 from '$img/c4.svg';
const whatwedo = `
## In Company

Our in-company courses allows you to grow your confidence in business or social English while saving time since our teachers come directly to your door. We assist and prepare students for real-world situations such as business meetings, interviews, presentations, and pitches! Our teachers have experience in the business world and can prepare you for working with international clients and colleagues.
All material given in class is provided by the school and then sent to the student within 24 hours after the class.

*CNS INTERNATIONAL offers in-company courses in English, French, Portuguse, and Spanish.*

**Please see below for the cancellation policy**

`;


const InCompany = (props) =>{
  return pug`
    section.incompanywp.corp
      .incompanywpin.section-body
        .incompany
          Markdown(source=whatwedo, escapehtml=false)

        .section-animations
          .section-imgs
            img(src=c3)

            img(src=c1)

            img(src=c4)

            img(src=c2)
  `;
};

export default InCompany;