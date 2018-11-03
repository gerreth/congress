/*
 * Member reducer
 */
import { fromJS } from 'immutable';

import {
  SET_EXPENSES,
  SET_MEMBER,
  SET_STATEMENTS,
  SET_VOTES,
} from './constants';

export const initialState = fromJS({});

function MemberReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EXPENSES:
      return state.setIn([action.memberId, 'expenses'], action.expenses);
    case SET_MEMBER:
      return state.setIn([action.memberId, 'member'], action.member);
    case SET_STATEMENTS:
      return state.setIn([action.memberId, 'statements'], action.statements);
    case SET_VOTES:
      return state.setIn([action.memberId, 'votes'], action.votes);
    default:
      return state;
  }
}

export default MemberReducer;
