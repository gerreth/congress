/*
 * Votes
 */

import React from 'react';

const VoteWrapper = {
  padding: '10px 0',
};

const VoteHeader = {
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'no-wrap',
  padding: '10px 0',
};

const VoteHPositionWrapper = {
  padding: '0 10px',
  textAlign: 'center',
  width: '80px',
};

const VotePosition = {
  color: 'rgb(255,255,255)',
  display: 'inline-block',
  fontSize: '.8em',
  padding: '5px',
  width: '100%',
};

const VoteDescription = {
  flex: 1,
  padding: '0 10px',
};

const VotelBillTitle = {
  color: 'rgb(150,150,150)',
  fontSize: '.8em',
  padding: '0 10px',
};

/* eslint-disable react/prefer-stateless-function */
const Votes = props => {
  const { votes } = props;

  return (
    <div>
      <h3>Recent votes (newest first)</h3>
      {votes.map(vote => {
        const colorIndex = ['Yes', 'No', 'Not Voting'].indexOf(vote.position);
        return (
          <div
            style={VoteWrapper}
            key={`${vote.congress}-${vote.sessiom}-${vote.roll_call}`}
          >
            <div style={VoteHeader}>
              <div style={VoteHPositionWrapper}>
                <span
                  style={{
                    background: colors[colorIndex],
                    ...VotePosition,
                  }}
                >
                  {vote.position === 'Not Voting' ? 'No vote' : vote.position}
                </span>
              </div>
              <div style={VoteDescription}>{vote.description}</div>
            </div>
            <div style={VotelBillTitle}>{vote.bill.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Votes;

const colors = ['#D4322E', '#76ADCF', '#FBAD68'];
