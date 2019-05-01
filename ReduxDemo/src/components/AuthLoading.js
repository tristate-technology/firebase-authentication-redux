import React, { Component } from 'react';
import { View, } from 'react-native';
import { connect } from 'react-redux';
import { Color } from '../common/Colors'

import {
    getUserToken,
} from '../actions';
import { Spinner } from './common';

class AuthLoading extends Component {
    componentWillMount() {
        this.navigateNext()
    }

    navigateNext = () => {
        this.props.getUserToken().then(() => {
            this.props.navigation.navigate(this.props.token != null ? 'App' : 'Auth')
        }).catch(error => Alert.alert('error'))
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Color.backGroundColor }}>
                <Spinner />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
    }
};

export default connect(mapStateToProps, {
    getUserToken
})(AuthLoading);