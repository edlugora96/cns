/* jshint ignore:end */
import React from 'react';
import l1 from '$img/1l.png';
import l2 from '$img/2l.png';
import l3 from '$img/3l.png';
import l4 from '$img/4l.png';
const flags = [l4,l1,l2,l3];
const Lang = (props) => {
  const {
    setProperty,
    lang
  } = props;
  return pug`
    .lang
      input#lang(type="checkbox")

      label(htmlFor="lang")
        img(src=flags[lang])

      #menu-lang.fade-in
        for flag, i in flags
          label(key="lang"+i htmlFor="lang" onClick=()=>setProperty({lang:i}) className=lang===i?"active":"")
            img(src=flag)
  `;
};
export default Lang;