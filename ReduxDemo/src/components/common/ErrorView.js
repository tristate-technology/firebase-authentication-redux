import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { Color } from '../../common/Colors'

const ErrorView = (props) => {
    return (
        <Text style={styles.textStyle}>
            {props.error}
        </Text>
    )
}

let styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20,
        fontSize: 20,
        color: Color.errorColor,
        textAlign: 'center'
    },
})

export { ErrorView }