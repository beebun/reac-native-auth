
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBV5luH-HLnNKjR0HCWFHcg6UvdHtZxs80',
      authDomain: 'auth-3cb17.firebaseapp.com',
      databaseURL: 'https://auth-3cb17.firebaseio.com',
      projectId: 'auth-3cb17',
      storageBucket: 'auth-3cb17.appspot.com',
      messagingSenderId: '240194067327'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true: 
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
          </Card>
        );
      case false:
        return (<LoginForm />);
      default:
        return (<Spinner size='large' />);
    }
  }

  render() {
    return (
      <View>
        <Header headerText="meGenome" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
