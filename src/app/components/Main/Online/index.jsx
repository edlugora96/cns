import React from 'react';
import Markdown from 'react-markdown/with-html';
// import webinar from '$img/Webinar2.svg';
const whatwedo = `
## Online

We offer online courses from any part of the world. Our private online classes allow you to learn a new language from any time zone. Like our in-person courses, our online courses are tailor-made and deisgned specifically for your level. Students choose which language they want to learn, and we prepare students for both social and professional real-life situations.

All material given during the class is provided by the school and then sent to the student within 24 hours after the class.

*CNS INTERNATIONAL offers online courses in English, French, Portuguse, and Spanish.*

**Please see below for the cancellation policy**

`;


const Online = (props) =>{
  return pug`
    .onlinewp
      .online
        Markdown(source=whatwedo, escapehtml=false)
  `;
};

export default Online;