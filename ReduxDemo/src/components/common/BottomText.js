import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import { Fonts } from '../../common/Fonts';
import { Color } from '../../common/Colors';


const BottomText = (props) => {
    return (
        <TouchableHighlight
            underlayColor={Color.transperentColor}
        >
            <View style={styles.container}>
                <Text style={styles.smallLeftText}>
                    {props.leftText ? props.leftText : ""}
                </Text>
                <Text style={styles.bigRightText}
                    onPress={() => props.onPress()}
                >
                    {props.rightText ? props.rightText : ""}
                </Text>
            </View>
        </TouchableHighlight>
    );
}

let styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 70,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    smallLeftText: {
        color: Color.black,
        fontSize: 18,
        marginLeft: 5,
    },
    bigRightText: {
        color: Color.bottomTextColor,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
        fontFamily: Fonts.Roya,

    },
});

export { BottomText }