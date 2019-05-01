import React, { Component } from 'react';

import { TextInput, StyleSheet, View } from 'react-native';
import { Color } from '../../common/Colors';

class TextInputComponent extends Component {
    render() {
        return (
            <View style={styles.textInputWrapView}>
                <TextInput
                    returnKeyType={this.props.returnKeyType}
                    ref={"Input"}
                    keyboardType={this.props.keyboardType}
                    placeholder={this.props.placeholder}
                    onSubmitEditing={this.props.onSubmitEditing}
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                    autoCapitalize='none'
                    secureTextEntry={this.props.secureTextEntry}
                    placeholderTextColor={Color.darkgrey}
                    style={styles.textInputStyle}
                />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    textInputWrapView: {
        marginHorizontal: 40,
        borderColor: Color.darkgrey,
        borderWidth: 1,
        borderRadius: 5,
        height: 50,
        paddingHorizontal: 14,
        marginVertical: 10,
    },
    textInputStyle: {
        flex: 1,
        color: Color.black,
        fontSize: 18,

    },
});

export { TextInputComponent }