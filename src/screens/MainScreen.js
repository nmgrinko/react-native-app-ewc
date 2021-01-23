import React, { useReducer } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableWithoutFeedback, 
  Keyboard 
} from 'react-native';


import AppButton from '../components/appButton/AppButton';
import { 
  styleButtonWhite, 
  styleButtonColor 
} from '../components/appButton/StyleButton';
import SegmentedControl from '../components/SegmentedControl';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import reducer from '../reducers/reducerMain';
import fetch from '../data/fetch';


export default function MainScreen() {
  const navigation = useNavigation(); 

  const initialState = { x: 0, y: 0, type: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const checkState = state.x !== 0 && state.x >= 20 && state.y !== 0 && state.y >= 24 && state.type !== 0;

  const showResult = (prop) => {
        if(prop.error || !prop.result) {
          navigation.navigate('Error', prop)
        }else{
          navigation.navigate('Success', prop)
        }   
  }

  const getResult = () => {
    if (checkState) {
      fetch(state).then(json => showResult(json))
    }
  }


  return (
    <View style = { styles.container } >

      <TouchableWithoutFeedback onPressOut = { () => Keyboard.dismiss() }>
        <View style = { styles.value }>
          <Text style = { styles.text }>Window width, inch</Text>
          <TextInput
            style = { styles.imput }
            keyboardType = 'numeric'
            onChangeText = { text => dispatch({ type: 'SET_WIDTH', data: text })}
          />
          { state.x > 0 && state.x < 20 ? 
            <Text style = { styles.textError }>Width should be >= 20</Text> : null
          }
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPressOut = { () => Keyboard.dismiss() }>
        <View style = { styles.value }>
          <Text style = { styles.text }>Window height, inch</Text>
          <TextInput
            style = { styles.imput }
            keyboardType = 'numeric'
            onChangeText = { text => dispatch({ type: 'SET_HEIGHT', data: text })}
          />
          { state.y > 0 && state.y < 24 ? 
            <Text style={styles.textError}>Height should be >= 24</Text> : null
          }
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPressOut = { () => Keyboard.dismiss() }>
        <View style = { styles.type }>
          <Text style = { styles.text }>Floor/level type</Text>
          <SegmentedControl click = { dispatch } />
          { state.type === 2 ? 
            <Text style = { styles.textInfo }>
              Wall of window well must be a minimum 36'' out from window and 
              minimum 36'' wide (parallel to window)
            </Text> : null
          }
        </View>
      </TouchableWithoutFeedback>
    
        <AppButton 
          click = { () => { getResult() }} 
          title = 'CALCULATE' 
          style = { 
            checkState ? 
            styleButtonColor(Colors.main, '100%') : 
            styleButtonWhite(Colors.main, '100%')
          }
        />
   
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.background,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10
  },
  text: {
    marginBottom: 6,
    fontSize: Layout.window.width / 22,
    fontFamily: 'SFUIText-bold',
    color: Colors.main,
    lineHeight: 24,
    textAlign: 'left'
  },
  textError: {
    fontSize: Layout.window.width / 28,
    color: Colors.error,
    paddingLeft: 10,
    paddingTop: 6,
  },
  textInfo: {
    fontSize: Layout.window.width / 28,
    color: Colors.main, 
    paddingLeft: 10,
    paddingTop: 6
  },

  imput: {
    width: '100%', 
    height: 50,  
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: Colors.main,
    borderRadius: 3,  
    paddingLeft: 20, 
    fontSize: Layout.window.width / 26
  },
  value: {
    width: '100%', 
    height: 120
  },
  type: {
    width: '100%', 
    height: Layout.ratio < 1.84 ? 110 : 120,
  },

  button: {
    width: '100%', 
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
