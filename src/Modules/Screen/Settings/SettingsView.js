import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Text} from 'native-base';
import TabMenu from '../../../Components/TabMenu';
export default class SettingsView extends Component<Props> {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};
    return {title: 'Settings', headerRight: <Text />};
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View
            style={{
              alignItems: 'center',
              marginTop: 50,
            }}>
            <Text>Hello World Settings</Text>
          </View>
        </Content>
        <TabMenu navigator={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
