import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';

import { Header } from 'react-navigation';
import { isIPhoneX } from '../../utilites/helper';
import { Fonts } from '../../common/Fonts';
import { Color } from '../../common/Colors'


const HeaderView = (props) => {
    return (
        <View style={header(props)}>
            <View style={styles.headerWrap}>
                <View style={styles.leftTextWrap}>
                    {props.headerLeft}
                </View>
                <View style={styles.centerTextWrap}>
                    {props.title ?
                        <Text style={styles.textStyle} numberOfLines={1}>
                            {props.title}
                        </Text> : null
                    }
                </View>
                <View style={styles.rightTextWrap}>
                    {props.headerRight}
                </View>

            </View>
        </View>
    );
    function header(props) {
        return {
            backgroundColor: props.headerColor ? props.headerColor : Color.transperentColor,
            height: Header.HEIGHT + (Platform.OS == 'android' ? 0 : isIPhoneX() ? 30 : 20),
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
}

let styles = StyleSheet.create({
    header: {
        height: Header.HEIGHT - 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerWrap: {
        top: Platform.OS == 'android' ? 0 : isIPhoneX() ? 12 : 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftTextWrap: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
        top: 4,
        marginLeft: 10
    },
    rightTextWrap: {
        flex: 2,
        alignItems: 'flex-end',
        justifyContent: 'center',
        top: 4,
        marginRight: 15
    },
    centerTextWrap: {
        flex: 6,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingTop: 5
    },
    textStyle: {
        color: Color.white,
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: Fonts.Roya,
    }
});

export { HeaderView };