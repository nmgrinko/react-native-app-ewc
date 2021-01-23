import React, { useReducer, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppButton from '../components/appButton/AppButton';
import { styleButtonWhite } from '../components/appButton/StyleButton';

import { DATA } from '../data/contentDocScreen';
import reducer from '../reducers/reduserDoc'; 
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';


const heightScreen = Layout.window.height;
const widthScreen = Layout.window.width;
const fontSize = widthScreen / 28;

function Item({ title }) {
    return (
      <View style = { styles.item }>
        <Text style = { styles.text }>{ title }</Text>
      </View>
    );
}

export default function DocScreen() {
    const initialContentHeight = heightScreen - (221 + (fontSize * 5.5));

    const initialState = { image: true, scroll: true, contentHeight: initialContentHeight };

    const [state, dispatch] = useReducer(reducer, initialState);

    const navigation = useNavigation();

    const eventScroll = (prop) => {
        const size1 = prop.contentOffset.y;
        const size2 = prop.layoutMeasurement.height;
        const size3 = prop.contentSize.height;
 
        if(size1 > (size3 - size2) * 0.85) {
            dispatch({ type: 'SET_IMAGE', image: false })
        } else { dispatch({ type: 'SET_IMAGE', image: true }) };
    }
    
    const onEndReached = (scroll) => {
        scroll.distanceFromEnd < 0 ? 
        dispatch({ type: 'DEL_SCROLL_IMAGE', image: false, scroll: false }) :
        dispatch({ type: 'UPDATE', image: true, scroll: true, height: initialContentHeight }) 
    }

    const onContentSize = (size) => {
        if(state.scroll === false ){
            dispatch({ type: 'SET_HEIGHT', height: size })
        } else { dispatch({ type: 'SET_HEIGHT', height: initialContentHeight }) }
    }

    const content =
        <SafeAreaView style = {{
            width: '100%', 
            height: state.contentHeight
            }}>
            <FlatList
                data = { DATA.text }
                renderItem = { ({ item }) => <Item title = { item.paragraph } /> }
                keyExtractor = { item => item.id }
                onMomentumScrollEnd = { (SyntheticEvent) => { 
                    eventScroll(SyntheticEvent.nativeEvent) 
                    }}
                scrollEnabled = { state.scroll }
                onEndReached = { (scroll) => onEndReached(scroll) }
                onContentSizeChange = { (widt, height) => onContentSize(height) } 
            />
        </SafeAreaView>   


    return (
        <View style = { styles.container }>
           
            <View style = { styles.title }>
                <Text style = { styles.textTitle }>
                    {DATA.title}
                </Text>
            </View>

            { content }
                  
            {state.image ? <Image
                style = { styles.image }
                source = { require('../../assets/images/lightening.png') }
            /> : null}
            
            <AppButton 
                click = { () => { navigation.navigate('Home') }} 
                title = 'OK' 
                style = { styleButtonWhite(Colors.main) }
            />     
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: Colors.background,
        paddingLeft: 15,
        paddingRight: 15
    },
    title: {
        width: '100%',
        height: fontSize * 5.5,
    },
    textTitle: {
        fontSize: fontSize,
        color: Colors.main, 
        fontFamily: 'SFUIText-bold',
        textAlign: 'justify'
    },
    
    item: {
        width: '100%',
        marginBottom: 8
      },
    text: {
        fontSize: fontSize,
        fontFamily: 'SFUIText-regular',
        textAlign: 'justify'
    },

    image: {
        zIndex: 99,
        position: 'absolute',
        top: heightScreen - 321,  // top: widthScreen - (99 + 122 + 100): 99 - height button; 122 - height title app; 100 - height image
        width: '100%',
        height: 100
      }
});