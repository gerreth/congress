/*
 * Details
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
const Details = props => {
  const { details } = props;

  return (
    <h2>
      {details.first_name} {details.middle_name} {details.last_name}
    </h2>
  );
};

export default Details;
