import React, { Fragment } from 'react';

import BasicLayout from './layouts/BasicLayout'
import Dashboard from './pages/Dashboard'

import { Route, BrowserRouter, Redirect, Router } from 'react-router-dom';

export default class extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { isMobile, history, onChangeLanguage } = this.props;

    if (true) {

      return (
          <Router history={history}>
            <Fragment>

                <div>
                  <Route exact path="/"  render={() => <Dashboard  {...this.props} user={null}> </Dashboard>} />
                </div>


            </Fragment>
          </Router>
      );
    }
  }
}