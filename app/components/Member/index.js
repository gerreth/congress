/*
 * Member
 */

import React from 'react';
import { Link } from 'react-router-dom';

import Details from './Details';
import Expenses from './Expenses';
import Statements from './Statements';
import Votes from './Votes';

const Wrapper = {
  background: 'rgb(255,255,255)',
  boxShadow: '1px 1px 2px 0px rgba(0,0,0,.05)',
  marginTop: '10px',
  padding: '20px 40px',
};

const StyledLink = {
  color: 'rgb(150,150,150)',
  textDecoration: 'none',
};

/* eslint-disable react/prefer-stateless-function */
const Member = props => {
  const {
    member: { expenses, member, statements, votes },
  } = props;

  return (
    <div style={Wrapper}>
      <Link to={`/`} style={StyledLink}>
        Back
      </Link>
      {member && <Details details={member} />}
      {statements && <Statements statements={statements} />}
      {expenses && <Expenses expenses={expenses} />}
      {votes && <Votes votes={votes} />}
    </div>
  );
};

export default Member;
