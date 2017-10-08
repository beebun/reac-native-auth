
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBV5luH-HLnNKjR0HCWFHcg6UvdHtZxs80',
      authDomain: 'auth-3cb17.firebaseapp.com',
      databaseURL: 'https://auth-3cb17.firebaseio.com',
      projectId: 'auth-3cb17',
      storageBucket: 'auth-3cb17.appspot.com',
      messagingSenderId: '240194067327'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
