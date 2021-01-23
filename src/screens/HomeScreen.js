import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppButton from '../components/appButton/AppButton';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import { styleButtonWhite, styleButtonColor } from '../components/appButton/StyleButton';


export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style = { styles.container }>
      <Image
        style = { styles.image }
        source  ={ require('../../assets/images/home.png') }
      />
      <View style = { styles.buttons }>
        <AppButton 
          click = { () => { navigation.navigate('Doc') }} 
          title = 'HELP' 
          style = { styleButtonWhite(Colors.main) }
        />
        <AppButton 
          click = { () => { navigation.navigate('Main') }} 
          title = 'START' 
          style = { styleButtonColor(Colors.main) }
        />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.background
  },
  image: {
    width: '100%',
    height: Layout.window.height < Layout.window.width * 1.341 + 221 ? 
      Layout.window.height - 221 : 
      Layout.window.width * 1.341, // 1.341 = (height image / width image)
    resizeMode: 'contain',
    alignItems: 'center', 
  },
  buttons: {
    flexDirection: 'row'
  }
});
