/*
 * Statements
 */

import React from 'react';

const Wrapper = {
  marginBottom: '50px',
};

const StatementWrapper = {
  marginBottom: '10px',
};

const DateWrapper = {
  display: 'block',
  fontSize: '.8em',
  padding: 0,
};

const TitleWrapper = {
  display: 'block',
  color: 'rgb(150,150,150)',
  padding: '5px 0',
  textDecoration: 'none',
};

/* eslint-disable react/prefer-stateless-function */
class Statements extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
  }

  componentWillUnMount() {
    this.setState({ collapsed: false });
  }

  getStatement = statement => {
    return (
      <div key={statement.title} style={StatementWrapper}>
        <span style={DateWrapper}>{statement.date}</span>
        <a href={statement.url} target="_blank" style={TitleWrapper}>
          {statement.title}
        </a>
      </div>
    );
  };

  onClick = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const { statements } = this.props;
    const { collapsed } = this.state;

    const head = statements.slice(0, 5);
    const tail = statements.slice(5);

    return (
      <div style={Wrapper}>
        <h3>Statements</h3>
        {head.map(statement => {
          return this.getStatement(statement);
        })}

        {collapsed &&
          tail.map(statement => {
            return this.getStatement(statement);
          })}

        <div onClick={this.onClick.bind(this)}>
          <span
            style={{
              background: 'rgb(40,40,40)',
              color: 'rgb(240,240,240)',
              cursor: 'pointer',
              fontSize: '.8em',
              padding: '5px 10px',
            }}
          >
            {collapsed ? 'Show less' : 'Show more'}
          </span>
        </div>
      </div>
    );
  }
}

export default Statements;
