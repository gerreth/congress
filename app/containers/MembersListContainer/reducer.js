/*
 * MembersListContainer reducer
 */
import { fromJS } from 'immutable';

import { SET_MEMBERS } from './constants';

export const initialState = fromJS({
  members: [],
});

function MembersListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MEMBERS:
      return state.set('members', action.members);
    default:
      return state;
  }
}

export default MembersListContainerReducer;
