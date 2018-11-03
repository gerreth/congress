import { SET_MEMBERS } from './constants';

export function setMembers(members) {
  return {
    type: SET_MEMBERS,
    members,
  };
}
