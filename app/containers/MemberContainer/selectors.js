import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the Data state domain
 */
const selectMember = (state, props) => {
  const members = state.get('members', initialState).toJS();
  return members[props.match.params.id];
};

export { selectMember };
