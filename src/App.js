
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import BottomNav from './components/BottomNav';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null, tabId: 0 };

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
        this.setState({ loggedIn: false, tabId: 0 });
      }
    });
  }

  onButtonNavChange(newTabIndex) {
    this.setState({ tabId: newTabIndex });
  }

  renderLoggedInContent() {
    switch (this.state.tabId) {
      case 0:
        return (
          <View>
          <Card>
            <CardSection>
              <Text style={{ fontSize: 20, alignItems: 'center' }}>meSLIIM Report</Text>
            </CardSection>
            <CardSection>
              <Button>Read report</Button>
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <Text style={{ fontSize: 20, alignItems: 'center' }}>meRIINEW</Text>
            </CardSection>
            <CardSection>
              <Button>Read report</Button>
            </CardSection>
          </Card>
          </View>
        );
      case 1:
        return (
          <View>
          <Card>
            <CardSection>
              <Text style={{ fontSize: 20, alignItems: 'center' }}>New Product1</Text>
            </CardSection>
            <CardSection>
              <Button>Order now</Button>
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <Text style={{ fontSize: 20, alignItems: 'center' }}>New Product2</Text>
            </CardSection>
            <CardSection>
              <Button>Order now</Button>
            </CardSection>
          </Card>
          </View>
        );
      default:
        return (
          <Card>
            <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
          </Card>
        );
    }
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true: 
        return (this.renderLoggedInContent());
      case false:
        return (<LoginForm />);
      default:
        return (<Spinner size='large' />);
    }
  }

  renderBottomNav() {
    if (this.state.loggedIn) {
      return (<BottomNav onTabChange={this.onButtonNavChange.bind(this)} />);
    } 
  }

  renderBody() {
    if (this.state.loggedIn) {
      return (
        <View 
          style={{ 
            flexGrow: 1,
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Header headerText="meGenome" />
          {this.renderContent()}
          {this.renderBottomNav()}
        </View>
      );
    } 
    return (<View>
      <Header headerText="meGenome" />
        {this.renderContent()}
    </View>);
  }

  render() {
    return (this.renderBody());
  }
}

export default App;
