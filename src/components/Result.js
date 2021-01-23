import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import AppButton from './appButton/AppButton';
import { styleButtonWhite } from './appButton/StyleButton';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';



const sizeIcon = Layout.window.width / 2.5 + 30;
const heightIconContainer = Layout.window.height / 2 - 99;


export default function Result({ text, textAmount, nameIcon, color }) {
  const navigation = useNavigation();
  return (
    <View style = { styles.container }>

      <View style = { styles.iconContainer }>
        <Ionicons 
          name = { nameIcon } 
          size = { sizeIcon } 
          color = { color }
          style = {{ height: heightIconContainer - 30, width: sizeIcon - 30 }}
        />
      </View>

      <View style = { styles.textContainer }>
        <Text style = {{ ...styles.text, color: color }}>{ text }</Text>
        <Text style = {{ ...styles.text, color: color }}>opening of { textAmount } sq. ft. in area</Text>
      </View>

        <AppButton 
          click = { () => { navigation.navigate('Home') }} 
          title = 'OK' 
          style = { styleButtonWhite(color) }
        />
     
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background
  },

  iconContainer: {
    width: '100%',
    height: heightIconContainer,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textContainer: {
    width: '100%',
    height: Layout.window.width / 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: Layout.window.width / 22,
    fontFamily: 'SFUIText-bold',
    paddingTop: 4,
    paddingBottom: 4
  }
});
