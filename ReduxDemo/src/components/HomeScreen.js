import React, { Component } from 'react';

import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';

import { removeUserToken } from '../actions';
import { HeaderView } from './common';
import { Color } from '../common/Colors';
import Icons from '../assets';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderView
                    headerColor={Color.headerColor}
                    title={'Home'}
                    headerRight={
                        <TouchableHighlight onPress={this.onLogOutPress}
                            underlayColor={'transparent'}
                        >
                            <Image source={Icons.logout_icon} style={{ height: 22, width: 22 }} />
                        </TouchableHighlight>
                    }
                />

                <View style={styles.mainView}>
                    <Text style={styles.mainText}>
                        Welcome!
                    </Text>
                </View>
            </View>
        );
    }

    // on press logout,navigate to login page
    onLogOutPress = () => {
        this.props.removeUserToken().then(() => {
            this.props.navigation.navigate('Auth');
        }).catch(error => this.setState({ error }))
    };

}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGroundColor,
    },
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    mainText: {
        textAlign: 'center',
        color: Color.headerColor,
        fontWeight: 'bold',
        fontSize: 36
    },
    logoutView: {
        marginVertical: 40,
        alignItems: 'center'
    },
    logoutText: {
        fontSize: 24,
        marginTop: 20,
        marginRight: 30,
        color: Color.buttonColor,
        fontWeight: '600',
        marginLeft: 20,
    }
});

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
};

export default connect(mapStateToProps, { removeUserToken })(HomeScreen);