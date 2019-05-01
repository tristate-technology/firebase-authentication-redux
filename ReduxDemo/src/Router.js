import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';

import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';

import LoginScreen from './components/LoginScreen';
import Registration from './components/RegistrationScreen';
import HomeScreen from './components/HomeScreen';
import NavigationService from './utilites/NavigationService';
import AuthLoading from './components/AuthLoading';

const AuthStack = createStackNavigator({
    login: { screen: LoginScreen },
    register: { screen: Registration },
},
    {
        headerMode: 'none'
    },
);

const AppStack = createStackNavigator({
    home: { screen: HomeScreen }
},
    {
        headerMode: 'none'
    },
);

const switchNav = createSwitchNavigator({
    AuthLoading,
    Auth: AuthStack,
    App: AppStack,
},
    {
        headerMode: 'none',
    }
);

const RootNavigator = createAppContainer(switchNav);

class Router extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle={'light-content'} />
                <RootNavigator
                    ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
                />
            </View>

        )
    }
}

export default Router;
