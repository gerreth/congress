/*
 * Expenses
 */

import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const Wrapper = {
  marginBottom: '50px',
};

/* eslint-disable react/prefer-stateless-function */
const Expenses = props => {
  const { expenses } = props;

  const bar = expenses
    .map(expense => {
      return {
        date: `${expense.year} - Q${expense.quarter}`,
        amount: expense.amount,
      };
    })
    .reverse();

  return (
    <div style={Wrapper}>
      <h3>Travel expenses</h3>
      <div style={{ height: '600px', width: '100%' }}>
        <Bar data={bar} />
      </div>
    </div>
  );
};

export default Expenses;

const colors = ['#76ADCF', '#D4322E', '#FBAD68'];

const Bar = data => {
  return (
    <ResponsiveBar
      animate={true}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: -60,
      }}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 45,
      }}
      borderColor="inherit:darker(1.6)"
      colors={colors}
      colorBy="id"
      data={data.data}
      enableGridX={true}
      enableLabel={false}
      groupMode="grouped"
      labelSkipWidth={1}
      labelSkipHeight={1}
      labelTextColor="inherit:darker(1.6)"
      margin={{
        top: 30,
        right: 50,
        bottom: 70,
        left: 70,
      }}
      minValue={0}
      motionStiffness={90}
      motionDamping={15}
      indexBy="date"
      keys={['amount']}
      padding={0.3}
    />
  );
};
