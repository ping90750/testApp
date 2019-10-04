import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import NavigationView from './src/Modules/Navigation/NavigationView';
export default class App extends Component<Props> {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavigationView />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
//<Text>Hello world</Text>
