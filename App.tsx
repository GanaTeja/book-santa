import React from 'react';
import { View, Text, TouchableOpacity, TextInput,StyleSheet } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
     <WelcomeScreen></WelcomeScreen>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
