/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import MembersListContainer from 'containers/MembersListContainer/Loadable';
import MemberContainer from 'containers/MemberContainer/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

const Header = {
  background: 'rgb(255,255,255)',
  boxShadow: '1px 1px 2px 0px rgba(0,0,0,.05)',
  fontSize: '1.4em',
  fontVariant: 'small-caps',
  lineHeight: '40px',
  textAlign: 'center',
  padding: '20px',
};

const StyledLink = {
  color: 'rgb(50,50,50)',
  textDecoration: 'none',
};

const Content = {
  margin: '0 auto',
  padding: '20px 0',
  width: '1000px',
};

export default function App() {
  return (
    <div>
      <div style={Header}>
        <Link to={`/`} style={StyledLink}>
          Congressional Representatives of California
        </Link>
      </div>
      <div style={Content}>
        <Switch>
          <Route exact path="/" component={MembersListContainer} />
          <Route exact path="/member/:id" component={MemberContainer} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </div>
    </div>
  );
}
