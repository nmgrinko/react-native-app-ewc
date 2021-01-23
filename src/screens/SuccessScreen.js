import React from 'react';

import Result from '../components/Result';
import Colors from '../constants/Colors';

export default function SuccessScreen(props) {
  const textAmount = +props.route.params.amount;
  const color = Colors.seccess;
  const text = 'Success! This window has a clear';
  const nameIcon = 'ios-checkmark-circle';
  return (
    <Result 
      text = { text } 
      textAmount = { textAmount }
      nameIcon = { nameIcon } 
      color = { color } 
    />
  );
}
