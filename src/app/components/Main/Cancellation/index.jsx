import React from 'react';
import Markdown from 'react-markdown/with-html';
const term = `
## Cancellation Policy

We understand that things happen and that we do not always have everything under control so we allow our students to cancel their classes within 24 hours before their class. The class can be replaced at any other day or time our teachers have availability.

This policy applies to both in-company and online classes.
`;


const Business = (props) =>{
  return pug`
    .cancellationwp
      .cancellation
        Markdown(source=term, escapehtml=false)
  `;
};

export default Business;