/**
 * @format
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { name as appName } from './app.json';
import allReducers from './src/main';


const store = createStore(
    allReducers,
    applyMiddleware(thunk)
)

const AppContainer = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )

}

AppRegistry.registerComponent(appName, () => AppContainer);
