/* jshint ignore:end */
import React from 'react';
import k1 from '$img/k1.svg';
import k2 from '$img/k2.svg';
import k3 from '$img/k3.svg';
import k4 from '$img/k4.svg';

const Kids = () => {
  return pug`
    section.kidswp
      .kidswpin.section-body
        .kids
          h1 Kids

          .kids-section
            p We believe that learning a new language is always a wonderful idea at any age. Allow your kids to have a jumpstart in life by starting them at an earlier age. We currently provide private 1-2-1 classes to prepare kids for any upcoming exam, or simply just to practice speaking, writing, reading, and listening!

            button.ui.button.primary SIGN UP TODAY

      .imgs-section-kids
        img(src=k1)

        img(src=k2)

        img(src=k3)

        img(src=k4)

      svg.uncode-row-divider.uncode-row-divider-curve(version="1.1", x="0px", y="0px", width="240px", height="24px", viewBox="0 0 240 24", enableBackground="new 0 0 240 24", xmlSpace="preserve", preserveAspectRatio="xMidYMid")
        path(fill="#0098D6", d="M119.849,0C47.861,0,0,24,0,24h240C240,24,191.855,0.021,119.849,0z")
  `;
};

export default Kids;