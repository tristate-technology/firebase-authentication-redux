import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Fonts } from '../../common/Fonts';
import { Color } from '../../common/Colors'

class ButtonComponent extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.buttonView} onPress={() => this.props.onPress()}>
                <Text style={styles.buttonText}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        )
    }
}

let styles = StyleSheet.create({
    buttonView: {
        marginTop: 20,
        justifyContent: 'center',
        backgroundColor: Color.headerColor,
        borderRadius: 6,
        height: 54,
        marginHorizontal: 40,
    },
    buttonText: {
        fontFamily: Fonts.Roya,
        textAlign: 'center',
        fontSize: 22,
        color: Color.white,
        fontWeight: '700'
    },
})

export { ButtonComponent }