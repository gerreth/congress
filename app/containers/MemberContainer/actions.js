import {
  SET_EXPENSES,
  SET_MEMBER,
  SET_STATEMENTS,
  SET_VOTES,
} from './constants';

export function setExpenses(memberId, expenses) {
  return {
    type: SET_EXPENSES,
    memberId,
    expenses,
  };
}

export function setMember(memberId, member) {
  return {
    type: SET_MEMBER,
    memberId,
    member,
  };
}

export function setStatements(memberId, statements) {
  return {
    type: SET_STATEMENTS,
    memberId,
    statements,
  };
}

export function setVotes(memberId, votes) {
  return {
    type: SET_VOTES,
    memberId,
    votes,
  };
}
