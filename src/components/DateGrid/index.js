import React, { Component, Fragment } from 'react'
import './index.less'
import {Tooltip} from 'antd';

import * as d3 from 'd3';

const GridSquare = ({day,color}) =>  <Fragment>
    {!day && <div></div>}
    {day && <Tooltip   placement={'right'} title={day.date}><div style={{backgroundColor : `rgba(${color}, ${day.amount/15})`   }}></div></Tooltip> }
</Fragment>

export default ({transactions}) => {

      /*group the data by date and transaction type*/
      const transactions_groupedby_date_and_type = d3.nest()
            .key(function(d) { return d.date; })
            .key(function(d) { return d.transactionType; })
            .rollup(function(leaves) { return leaves.length; })
            .entries(transactions)
            .sort((a,b ) => new Date(a.key).getTime() - new Date(b.key).getTime());

        console.log(transactions_groupedby_date_and_type);

      //TODO is this really safe to get failed from array[0] and success from array[1]
      const failedTransactions  = transactions_groupedby_date_and_type.map(d=> ({date : d.key, amount : d.values[0] ? d.values[0].value : 0 }))
      const successTransactions = transactions_groupedby_date_and_type.map(d=> ({date : d.key, amount : d.values[1] ? d.values[1].value : 0 }))

       //Padding is the number of days that occur bettween  a monday and the 1st January, so if 1st Jan is a Tuesday, we need to pad 31st Dec, so padding would be 1 item
      const padding = [null]; //hard coded

      return <div className="DateGrid">

            <div className="grid_dow">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) =>  <div>{day}</div>)}
            </div>

            <div className="grid" >
                {padding.concat(failedTransactions).map((day, i) => <GridSquare color={'255,0,0'} day={day}/> )}
            </div>

            <div className="grid" >
                  {padding.concat(successTransactions).map((day, i) => <GridSquare color={'0,255,0'} day={day}/> )}
            </div>

    </div>
}