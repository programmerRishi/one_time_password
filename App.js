import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyDml8iwOWzkhMzECqR3NJNYWtadxa2w5nw',
    authDomain: 'one-time-password-fad99.firebaseapp.com',
    databaseURL: 'https://one-time-password-fad99.firebaseio.com',
    projectId: 'one-time-password-fad99',
    storageBucket: 'one-time-password-fad99.appspot.com',
    messagingSenderId: '942988700450'
  };
  firebase.initializeApp(config);
  }


  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
