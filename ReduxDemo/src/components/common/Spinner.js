import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';

import { Color } from '../../common/Colors'

class Spinner extends Component {
    render() {
        return (
            <View style={styles.containerSmall}>
                <ActivityIndicator
                    size={this.props.small ? "small" : "large"}
                    color={Color.buttonColor}
                    animating={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerSmall: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        top: '40%',
    },
})

export { Spinner }