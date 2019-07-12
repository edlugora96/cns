/* jshint ignore:end */
import React from "react";
import Map from '$utils/Map';

import im1 from "$img/visa.png";
import im2 from "$img/2.png";
import im3 from "$img/3.png";
import im4 from "$img/4.png";
import im5 from "$img/5.png";

const Footer = (props) => {
  const { mobile } = props;
  return pug`
    footer#footer
      .top-footer
        .logo-invert

        .footer-sections
          .footer-section
            h3 Contact Us

            p CNS International offers tailor-made classes and translations in English, French, Portuguese and Spanish for one-to-one or small groups. We focus on the objectives of the student and provide effective and concrete results.

            b Address

            p Plaza de Carlos Tris Betrán 4.

            b Email

            p contacto@cnsinternational.es

            b Phone

            p +34 658 67 37 24

            .ui.button.primary Become a student

            .ui.button.primary Become a teacher

            p

            nav.social-footer
              a(href="https://www.facebook.com/cnsinternational.es/")
                i.icon.facebook.big

              a(href="https://twitter.com/CNSInter")
                i.icon.twitter.big

              a(href="https://www.linkedin.com/in/cnsinternational")
                i.icon.linkedin.big

          if (!mobile)
            .footer-section.map
              Map

          //-   h3 TWITTER

          //-   a @John Doe

          //-   p Aliquam nec elementum odio, non loare congue ligula curabitur. Nulla venenatis malesuada diam volutpat vulputate. Suspendisse et tortor mauris.

          //-   a @John Doe

          //-   p Duis id nulla sodales, dapibus enim sed. Vestibulum lobortis sed sit amet gravida.

          //-   a Become a student

          //-   a Become a teacher

      .bottom-footer
        .copy Copyright 2019 © CNS International - Learning Platform | All Rights Reserved

        .section-copy
          a(href="#")
            img(src=im1)

          a(href="#")
            img(src=im2)

          a(href="#")
            img(src=im3)

          a(href="#")
            img(src=im4)

          a(href="#")
            img(src=im5)
  `;
};

export default Footer;