import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Text} from 'native-base';
import TabMenu from '../../../Components/TabMenu';
export default class OtherView extends Component<Props> {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};
    return {title: 'Other', headerRight: <Text/>};
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (<Container style={styles.container}>
      <Content>
        <View style={{
            alignItems: 'center',
            marginTop: 50
          }}>
          <Text>Hello World Other</Text>
        </View>
      </Content>
      <TabMenu navigator={this.props.navigation}/>
    </Container>);
  }
}
const styles = StyleSheet.create({});
