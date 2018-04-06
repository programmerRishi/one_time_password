import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-fad99.cloudfunctions.net';
class SignUpForm extends Component {

  state = { phone: '', code: '' };
  handleSubmit = async() => {
    const { phone, code } = this.state;
    try {
    const { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone, code });
    console.log(data.token);
    firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
    console.log(err.response);
  }
  };

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
        <FormLabel>Enter your phone number </FormLabel>
        <FormInput
        value={this.state.phone}
        onChangeText={phone => this.setState({ phone })}
        />
        </View>
        <View style={{ marginBottom: 10 }}>
        <FormLabel>Enter code send to you mobile </FormLabel>
        <FormInput
        value={this.state.code}
        onChangeText={code => this.setState({ code })}
        />
        </View>
        <Button title='Submit' onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignUpForm;
