import React, { Component, Suspense } from 'react';
import { connect } from 'dva';

import transactions from '../../components/DateGrid/evezy-transactions.json'

import DateGrid from './../../components/DateGrid'

import './index.less';

class Dashboard extends Component {

  render() {
    return  <DateGrid transactions={transactions}/>
  }
}

export default connect(namespaces => {

  return {}

})(props => (
  <Dashboard {...props}  />
));

