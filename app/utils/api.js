export const baseUrl = 'https://api.propublica.org/congress/v1/members';

export const options = {
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': '8nxiD771T6MQtkLhd1YBsgcmSskeYhfouvan6R1v',
  },
  json: true,
  method: 'GET',
};

export const endpoints = {
  members: 'house/CA/current.json',
  votingPattern: 'votes.json',
  statements: 'statements/115.json',
  expenses: 'office_expenses/category/travel.json',
};
