/*
 * Member
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { BeatLoader } from 'react-spinners';

import Member from 'components/Member';
import { baseUrl, options, endpoints } from 'utils/api';

import { setExpenses, setMember, setStatements, setVotes } from './actions';
import { selectMember } from './selectors';

/* eslint-disable react/prefer-stateless-function */
class MemberContainer extends React.PureComponent {
  componentDidMount() {
    const memberId = this.props.match.params.id;

    if (!this.props.member) {
      this.load(memberId);
    }
  }

  load = memberId => {
    this.getMember(memberId, `${baseUrl}/${memberId}.json`);
    this.getExpenses(memberId, `${baseUrl}/${memberId}/${endpoints.expenses}`);
    this.getStatements(
      memberId,
      `${baseUrl}/${memberId}/${endpoints.statements}`,
    );
    this.getVotes(
      memberId,
      `${baseUrl}/${memberId}/${endpoints.votingPattern}`,
    );
  };

  getExpenses = async (memberId, url) => {
    const expenses = await this.request(url, options);
    this.props.setExpenses(memberId, expenses.results);
  };

  getMember = async (memberId, url) => {
    const details = await this.request(url, options);
    this.props.setMember(memberId, details.results[0]);
  };

  getStatements = async (memberId, url) => {
    const statements = await this.request(url, options);
    this.props.setStatements(memberId, statements.results);
  };

  getVotes = async (memberId, url) => {
    const votes = await this.request(url, options);
    this.props.setVotes(memberId, votes.results[0].votes);
  };

  request = async (url, options) => {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  };

  render() {
    if (this.props.member) {
      return <Member member={this.props.member} />;
    }
    return <BeatLoader loading={true} />;
  }
}

const mapStateToProps = (state, props) => {
  return {
    member: selectMember(state, props),
  };
};

const mapDispatchToProps = dispatch => ({
  setExpenses: (id, expenses) => dispatch(setExpenses(id, expenses)),
  setMember: (id, member) => dispatch(setMember(id, member)),
  setStatements: (id, statements) => dispatch(setStatements(id, statements)),
  setVotes: (id, votes) => dispatch(setVotes(id, votes)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MemberContainer);
