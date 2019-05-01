import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'Your Api Key',
            authDomain: 'Auth Domain',
            databaseURL: 'Your database Url',
            projectId: 'Your Project Id',
            storageBucket: 'Storage Bucket',
            messagingSenderId: 'Messenging Sender Id'
        };
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App;
