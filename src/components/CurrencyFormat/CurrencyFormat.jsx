import React from 'react';
import numeral from 'numeral';

const CurrencyFormat = ({ amount }) => {
  // This formats numbers into a string like $1,234.56
  const formattedAmount = numeral(amount).format('$0,0.00');
  return <div>{formattedAmount}</div>;
};

export default CurrencyFormat;