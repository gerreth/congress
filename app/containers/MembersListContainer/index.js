/*
 * MembersListContainer
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createSelector } from 'reselect';
import { BeatLoader } from 'react-spinners';

import MembersList from 'components/MembersList';
import { baseUrl, options, endpoints } from 'utils/api';

import { setMembers } from './actions';
import { makeSelectMembers } from './selectors';

/* eslint-disable react/prefer-stateless-function */
class MembersListContainer extends React.PureComponent {
  async componentDidMount() {
    const url = `${baseUrl}/${endpoints.members}`;

    const result = await this.request(url, options);

    this.props.setMembers(result.results);
  }

  request = async (url, options) => {
    const response = await fetch(url, options);

    const json = await response.json();

    return json;
  };

  render() {
    if (this.props.members) {
      return <MembersList members={this.props.members} />;
    }
    return <BeatLoader loading={true} />;
  }
}

const mapStateToProps = createSelector(makeSelectMembers(), members => ({
  members,
}));

const mapDispatchToProps = dispatch => ({
  setMembers: members => dispatch(setMembers(members)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MembersListContainer);
