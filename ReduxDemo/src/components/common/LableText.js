import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Fonts } from '../../common/Fonts'
import { Color } from '../../common/Colors';

const LableText = (props) => {
    return (
        <View style={styles.headingView}>
            <Text style={styles.headingText}>
                {props.text}
            </Text>
        </View>
    );
}

let styles = StyleSheet.create({
    headingView: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 40,
        marginVertical: 50,
    },
    headingText: {
        color: Color.headerColor,
        textAlign: 'center',
        fontSize: 34,
        fontWeight: 'bold',
        fontFamily: Fonts.Roya
    },
});

export { LableText }