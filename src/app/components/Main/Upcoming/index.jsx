import React from 'react';
import bg5 from '$img/1.jpg';
import bg6 from '$img/2.jpg';
import bg7 from '$img/3.jpg';

const Upcoming = (props) =>{
  return pug`
    .seciton-body
      h1 Upcoming Events
      .uc-ev
        .ui.card
          .image
            img(src=bg5)

          .content
            a.header How to become an UX Designer
            .meta
              span.date 12 LESSONS
              span.date 3:15h

            .description
              | At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.

          .extra.content
            button.ui.button VIEW COURSE

        .ui.card
          .image
            img(src=bg7)

          .content
            a.header 8 steps to your own startup
            .meta
              span.date 8 LESSONS
              span.date 4:32h

            .description
              | At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.

          .extra.content
            button.ui.button VIEW COURSE

        .ui.card
          .image
            img(src=bg6)

          .content
            a.header Business communication for marketers
            .meta
              span.date 15 LESSONS
              span.date 6:04h

            .description
              | At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.

          .extra.content
            button.ui.button VIEW COURSE
  `;
};

export default Upcoming;
