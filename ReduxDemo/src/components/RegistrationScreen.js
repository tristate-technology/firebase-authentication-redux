import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Alert,
    Platform
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { isIPhoneX } from '../utilites/helper';

import {
    nameChanged,
    emailChanged,
    passwordChanged,
    registerUser
} from '../actions';

import { Color } from '../common/Colors'

import {
    Spinner,
    LableText,
    TextInputComponent,
    HeaderView,
    ButtonComponent,
    BottomText,
    ErrorView
} from './common';

class RegistrationScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderView

                />
                <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
                    <View>
                        <LableText text='Register' />

                        <TextInputComponent
                            returnKeyType={"next"}
                            placeholder="User Name"
                            value={this.props.name}
                            onChangeText={this.onChangeUserName}
                            onSubmitEditing={() => this.refs.emailInput.refs.Input.focus()}
                        />

                        <TextInputComponent
                            ref={"emailInput"}
                            returnKeyType={"next"}
                            keyboardType={'email-address'}
                            placeholder="Email"
                            value={this.props.email}
                            onChangeText={this.onChangeEmail}
                            onSubmitEditing={() => this.refs.PassInput.refs.Input.focus()}
                        />

                        <TextInputComponent
                            ref={'PassInput'}
                            returnKeyType={"done"}
                            secureTextEntry={true}
                            placeholder="Password"
                            value={this.props.password}
                            onChangeText={this.onChangePassword}
                            onSubmitEditing={this.onRegisterButtonPress}
                        />

                        {this.props.error ? <ErrorView error={this.props.error} /> : null}

                        <ButtonComponent
                            onPress={this.onRegisterButtonPress}
                            text='Register'
                        />
                        <View style={styles.BottomTextView}>
                            <BottomText
                                leftText={'Already registered?'}
                                rightText={'Login'}
                                onPress={this.onPressLoginBtn}
                            />
                        </View>

                        {this.props.loading ? <Spinner /> : null}
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }

    // when back button is pressed,navigate user to login page
    onPressBack = () => {
        this.props.navigation.goBack()
    }

    // when user inputs name
    onChangeUserName = (text) => {
        this.props.nameChanged(text)
    }

    // when user inputs email this function is called
    onChangeEmail = (text) => {
        this.props.emailChanged(text, 'regEmail')
    }

    // user inputs password
    onChangePassword = (text) => {
        this.props.passwordChanged(text, 'regPass')
    }

    /**
     * when register button is pressed validates user and then registers user entry in firebase
        after successful validation
     */
    onRegisterButtonPress = () => {
        if (this.validateData()) {
            const { email, password } = this.props;
            this.props.registerUser({ email, password });
        }
    }

    // validates new user
    validateData = () => {
        const { email, password, name } = this.props;
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (name.trim() == '') {
            Alert.alert('Please enter username');
            return false;
        }
        if (email.trim() == '') {
            Alert.alert('Please enter email!');
            return false;
        }
        if (reg.test(email.trim()) === false) {
            Alert.alert('Please enter valid email');
            return false;
        }
        else if (password == '') {
            Alert.alert('Please enter password');
            return false;
        }
        else if (password.length < 6) {
            Alert.alert("Password should be more than or equal to 6 characters");
        }
        else return true;
    }

    // navigate to login page
    onPressLoginBtn = () => {
        this.props.navigation.navigate('login')
    }
};

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGroundColor,
    },
    BottomTextView: {
        justifyContent: 'flex-end',
        height: Platform.OS == 'android' ? 70 : isIPhoneX() ? 170 : 220,
    }
});

const mapStateToProps = state => {
    return {
        email: state.auth.regEmail,
        name: state.auth.name,
        password: state.auth.regPass,
        loading: state.auth.loading,
        error: state.auth.errors
    }
};

export default connect(mapStateToProps, {
    nameChanged,
    emailChanged,
    passwordChanged,
    registerUser
})(RegistrationScreen);

