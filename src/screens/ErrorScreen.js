import React from 'react';

import Result from '../components/Result';
import Colors from '../constants/Colors';

export default function ErrorScreen(props) {
  const textAmount = +props.route.params.amount;
  const color = Colors.error;
  const text = 'Oops... This window has a clear';
  const nameIcon = 'ios-close-circle';
  return (
    <Result 
      text = { text } 
      textAmount = { textAmount }
      nameIcon = { nameIcon } 
      color = { color } 
    />
  );
}
