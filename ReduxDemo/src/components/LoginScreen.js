import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Alert,
    Platform
} from 'react-native';
import { isIPhoneX } from '../utilites/helper';

import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Color } from '../common/Colors';

import {
    emailChanged,
    passwordChanged,
    loginUser,
    getUserToken,
} from '../actions';
import {
    ButtonComponent,
    LableText,
    TextInputComponent,
    Spinner,
    HeaderView,
    ErrorView,
    BottomText
} from './common';


class LoginScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView keyboardShouldPersistTaps="always" style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <HeaderView />
                        <LableText text='Login' />

                        <TextInputComponent
                            returnKeyType={"next"}
                            keyboardType={'email-address'}
                            placeholder="Email"
                            value={this.props.email}
                            onChangeText={this.onEmailChange}
                            onSubmitEditing={() => this.refs.PassInput.refs.Input.focus()}
                        />

                        <TextInputComponent
                            ref={'PassInput'}
                            returnKeyType={"done"}
                            secureTextEntry={true}
                            placeholder="Password"
                            value={this.props.password}
                            onChangeText={this.onPasswordChange}
                            onSubmitEditing={this.onLoginBtnPress}
                        />

                        {this.props.error ? <ErrorView error={this.props.error} /> : null}

                        <ButtonComponent
                            onPress={this.onLoginBtnPress}
                            text='Login'
                        />
                        <View style={styles.BottomTextView}>
                            <BottomText
                                onPress={() => this.props.navigation.navigate('register')}
                                leftText={"Don't have an account?"}
                                rightText={'Register'}
                            />
                        </View>

                        {this.props.loading ? <Spinner /> : null}
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }

    // function called when user inputs email
    onEmailChange = (text) => {
        this.props.emailChanged(text, 'loginEmail')
    }

    // function called when user inputs password
    onPasswordChange = (text) => {
        this.props.passwordChanged(text, 'loginPass')
    }

    // when user press login button this function is called
    onLoginBtnPress = () => {
        if (!this.props.loading && this.validateData()) {
            const { email, password } = this.props;
            this.props.loginUser({ email, password });
        }
    }

    // to validate user data
    validateData = () => {
        const { email, password } = this.props;
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (email.trim() == '') {
            Alert.alert('Please enter email!');
            return false;
        }
        if (reg.test(email.trim()) === false) {
            Alert.alert('Please enter valid email');
            return false;
        }
        else if (password == '') {
            Alert.alert('Please enter password!');
            return false;
        }
        else if (password.length < 6) {
            Alert.alert("Password should be more than or equal to 6 characters");
            return false;
        }
        else return true;
    }

};

let styles = StyleSheet.create({
    container: {
        backgroundColor: Color.backGroundColor,
        flex: 1,
        marginTop: Platform.OS == 'android' ? 0 : isIPhoneX() ? 50 : 50,
    },
    BottomTextView: {
        justifyContent: 'flex-end',
        height: Platform.OS == 'android' ? 160 : isIPhoneX() ? 210 : 260,
    }
});

const mapStateToProps = state => {
    return {
        email: state.auth.loginEmail,
        name: state.auth.name,
        password: state.auth.loginPass,
        loading: state.auth.loading,
        token: state.auth.token,
        isUser: state.auth.isUser,
        error: state.auth.error
    }
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser,
    getUserToken,
})(LoginScreen);