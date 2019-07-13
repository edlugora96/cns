import React from 'react';
import bg5 from '$img/1.jpg';
import bg6 from '$img/2.jpg';
import bg7 from '$img/3.jpg';
const upText = {
  0:{
    title:'Upcoming Events',
  },
  1:{
    title:'Próximos Eventos',
  },
  2:{
    title:'Upcoming Events',
  },
  3:{
    title:'Upcoming Events',
  }
};
const Upcoming = (props) =>{
  return pug`
    section.upcomingwp
      svg.uncode-row-divider.uncode-row-divider-curve(version="1.1", x="0px", y="0px", width="240px", height="24px", viewBox="0 0 240 24", enableBackground="new 0 0 240 24", xmlSpace="preserve", preserveAspectRatio="xMidYMid")
        path(fill="#0098D6", d="M119.849,0C47.861,0,0,24,0,24h240C240,24,191.855,0.021,119.849,0z")

      .upcomingwpin.seciton-body
        h1= upText[props.lang].title

        .upcoming.uc-ev
          div
            .ui.card
              .image
                img(src=bg5)

              .content
                a.header How to become an UX Designer
                .meta
                  span.date 12 LESSONS

                  span.date 3:15h

                  br

                  span.date September Events TBC

                .description
                  | At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.

              .extra.content
                button.ui.button VIEW COURSE

          div
            .ui.card
              .image
                img(src=bg7)

              .content
                a.header 8 steps to your own startup
                .meta
                  span.date 8 LESSONS

                  span.date 4:32h

                  br

                  span.date September Events TBC

                .description
                  | At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.

              .extra.content
                button.ui.button VIEW COURSE

          div
            .ui.card
              .image
                img(src=bg6)

              .content
                a.header Business communication for marketers
                .meta
                  span.date 15 LESSONS

                  span.date 6:04h

                  br

                  span.date September Events TBC

                .description
                  | At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.

              .extra.content
                button.ui.button VIEW COURSE
  `;
};

export default Upcoming;
