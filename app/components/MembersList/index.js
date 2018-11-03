/*
 * Members List
 */
import React from 'react';
import { Link } from 'react-router-dom';

const Wrapper = {
  display: 'flex',
  flexWrap: 'wrap',
};

const MemberWrapper = {
  display: 'inline-block',
  padding: '10px',
  position: 'relative',
  textDecoration: 'none',
  width: '25%',
};

const Member = {
  background: 'rgb(255,255,255)',
  boxShadow: '1px 1px 2px 0px rgba(0,0,0,.05)',
  padding: '15px',
};

const Image = {
  backgroundSize: 'cover',
  height: '200px',
  width: '200px',
};

const Name = {
  color: 'rgb(50, 50, 50)',
  fontWeight: 700,
  padding: '15px 0 0 0',
};

const democrats = '#1F5C7D';
const republicans = '#C80D16';

/* eslint-disable react/prefer-stateless-function */
const MembersList = props => {
  const { members } = props;

  const getMember = member => {
    let backgroundImage = '';
    if (member.facebook_account) {
      backgroundImage = `url(http://graph.facebook.com/${
        member.facebook_account
      }/picture?type=large)`;
    }
    if (member.twitter_id) {
      backgroundImage = `url(https://avatars.io/twitter/${member.twitter_id})`;
    }

    return (
      <Link to={`/member/${member.id}`} style={MemberWrapper} key={member.id}>
        <div style={{ ...Member }}>
          <div style={{ ...Image, backgroundImage }} />
          <div style={Name}>{member.name}</div>
        </div>
      </Link>
    );
  };

  const memberList = members.map(member => getMember(member));

  return <div style={Wrapper}>{memberList}</div>;
};

export default MembersList;
