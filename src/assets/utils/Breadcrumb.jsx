import React from 'react';
import { withRouter, Link } from "react-router-dom";

const Breadcrumb = (props) =>{
  const { location } = props;
  const local = location.pathname.split('/');
  return pug`
    .ui.breadcrumb
      for path, index in local
        if(index!==local.length-1)
          Link.section(to=path className=index===local.length-1&&"active")= path===''?'Home':path

        else
          .active.section=path===''?'Inicio':path

        if(index!==local.length-1)
          i.right.angle.icon.divider
 `;
};

export default  withRouter(Breadcrumb);
