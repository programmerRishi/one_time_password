import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-fad99.cloudfunctions.net';
class SignUpForm extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { phone: '' };
  // } // classical way of declaring state (ES-6)

  state = { phone: '' };// ES7 syntax

  //callback function defined below in accordance to ES-7
  //Therefore we don't have to bind the context of handleSubmit with 'this'
  //We are also using async/await syntax instead of .then()-- ES-7
  handleSubmit = async() => {
    try {
      console.log('creation started');
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
      console.log('creation complete');
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
      console.log('one time password created');
    } catch (err) {
      console.log(err.response);
    }
}
  //ES-6
  // handleSubmit = () => {
  //   axios.post(`${ROOT_URL}/createUser`,
  //     {
  //     phone: this.state.phone
  //     }).then(() => {
  //     axios.post(`${ROOT_URL}/requestOneTimePassword`,
  //       {
  //       phone: this.state.phone
  //       });
  //   });
  // }
  render() {
    return (
    <View>
      <View style={{ marginBottom: 10 }}>
        <FormLabel>Enter your phone number</FormLabel>
        <FormInput
        value={this.state.phone}
        onChangeText={phone => this.setState({ phone })}
        />
      </View>
      <Button onPress={this.handleSubmit} title="Submit">
      {/*notice handleSubmit is not bound to 'this' -- ES-7 */}
      </Button>
    </View>
            );
  }
}

export default SignUpForm;
