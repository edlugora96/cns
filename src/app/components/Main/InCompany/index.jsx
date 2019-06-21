import React from 'react';
import Markdown from 'react-markdown/with-html';
const whatwedo = `
## In Company

Our in-company courses allows you to grow your confidence in business or social English while saving time since our teachers come directly to your door. We assist and prepare students for real-world situations such as business meetings, interviews, presentations, and pitches! Our teachers have experience in the business world and can prepare you for working with international clients and colleagues.
All material given in class is provided by the school and then sent to the student within 24 hours after the class.

*CNS INTERNATIONAL offers in-company courses in English, French, Portuguse, and Spanish.*

**Please see below for the cancellation policy**

`;


const InCompany = (props) =>{
  return pug`
    .incompanywp.corp
      .incompany
        Markdown(source=whatwedo, escapehtml=false)
  `;
};

export default InCompany;