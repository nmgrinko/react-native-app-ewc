import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

export default function SegmentedControl ({ click }) {
    const [state, setState] = useState(0)

    return (
        <View style = { styles.controlPanel }>
            
            <TouchableWithoutFeedback 
                onPress = { () => { 
                        setState(1); 
                        click({ type: 'SET_TYPE', data: '1' }); 
                        Keyboard.dismiss() 
                    }
                } 
                activeOpacity = { 1 }
            >
                <View style = { state === 1 ? { ...styles.leftButton,  ...styles.activeButton } :  { ...styles.leftButton,  ...styles.passiveButton }}>
                    <Text style = { state === 1 ? styles.activeText :  styles.text }>First floor</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback 
                onPress = { () => { 
                        setState(2); 
                        click({ type: 'SET_TYPE', data: '2' }); 
                        Keyboard.dismiss() 
                    }
                } 
                activeOpacity = { 1 }
            >
                <View style = { state === 2 ? { ...styles.rightButton,  ...styles.activeButton } :  { ...styles.rightButton,  ...styles.passiveButton }}>
                    <Text style = { state === 2 ? styles.activeText :  styles.text }>Basement</Text>
                </View>
            </TouchableWithoutFeedback>
                   
        </View>
    )
}

const styles = StyleSheet.create({
    controlPanel: {
        width: Layout.window.width - 30,
        height: 50,
        flexDirection: 'row'
    },

    text: {
        fontSize: Layout.window.width / 24,
        fontFamily: 'SFUIText-regular',
        textAlign: 'center',
        color: Colors.main
    },
    activeText: {
        fontSize: Layout.window.width / 24,
        fontFamily: 'SFUIText-regular',
        textAlign: 'center',
        color: Colors.background
    },

    leftButton: {
        width: (Layout.window.width - 30)/2,
        height: 50,
        borderWidth: 2,
        borderRightWidth: 1,
        borderStyle: 'solid',
        borderColor: Colors.main,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        justifyContent: 'center',
    },
    rightButton: {
        width: (Layout.window.width - 30)/2,
        height: 50,
        borderWidth: 2,
        borderLeftWidth: 1,
        borderStyle: 'solid',
        borderColor: Colors.main,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        justifyContent: 'center',
    },
    passiveButton: {
        backgroundColor: Colors.background
    },
    activeButton: {
        backgroundColor: Colors.main
    },

    line: {
        width: 2,
        height: 46,
        backgroundColor: Colors.main
    }
})