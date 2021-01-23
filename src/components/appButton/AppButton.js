import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';

import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';

const AppButton = ({ click, title, style }) => {  
    return(
        <TouchableWithoutFeedback onPress = { click } activeOpacity = { 1 }>
            <View style = {{ ...styles.view, ...style.view }}>
                <Text style = {{ ...styles.text, ...style.text }}>{ title }</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    view: {
        width: Layout.window.width / 2.5,
        height: 50,
        justifyContent: 'center',
        backgroundColor: Colors.background,
        borderRadius: 4,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: Colors.main,
        marginTop: 36,
        marginBottom: 36,
        marginLeft: 9,
        marginRight: 9
    },
    text: {
        fontSize: Layout.window.width / 24,
        fontFamily: 'Arial',
        textAlign: 'center',
        color: Colors.background
    }
})

export default AppButton