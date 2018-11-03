import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the Data state domain
 */
const selectData = state => state.get('membersList', initialState);

/**
 * Select members
 */
const makeSelectMembers = () =>
  createSelector(selectData, dataState => dataState.get('members'));

export { selectData, makeSelectMembers };
