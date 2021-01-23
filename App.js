import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import MainScreen from './src/screens/MainScreen';
import SuccessScreen from './src/screens/SuccessScreen';
import ErrorScreen from './src/screens/ErrorScreen';
import DocScreen from './src/screens/DocScreen';

import Colors from './src/constants/Colors';
import Layout from './src/constants/Layout';


const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'Arial': require('./assets/fonts/Arial.ttf'),
          'SFUIText-bold': require('./assets/fonts/SFUIText-Bold.ttf'),
          'SFUIText-regular': require('./assets/fonts/SFUIText-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
    

  }, []);

 
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style = { styles.container }>
        <View style = { styles.title }>
          <Text style = { styles.titleText }>Egress Window Calculator</Text> 
        </View>
        { Platform.OS === 'ios' && <StatusBar barStyle="default"/> }
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName = "Home"
            headerMode = "none" 
          >
            <Stack.Screen name = "Doc" component = { DocScreen } />
            <Stack.Screen name = "Home" component = { HomeScreen } />
            <Stack.Screen name = "Main" component = { MainScreen } />
            <Stack.Screen name = "Success" component = { SuccessScreen } />
            <Stack.Screen name = "Error" component = { ErrorScreen } />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 44,
    paddingBottom: 0
  },
  title: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    marginBottom: 15
  },
  titleText: {
    fontSize: Layout.window.width / 18,
    fontFamily: 'Arial',
    textAlign: 'center'
  }
});
