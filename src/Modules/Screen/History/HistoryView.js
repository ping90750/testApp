import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Text} from 'native-base';
import TabMenu from '../../../Components/TabMenu';
export default class HistoryView extends Component<Props> {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};
    return {title: 'History', headerRight: <Text />};
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{alignItems: 'center', marginTop: 50}}>
            <Text>Hello World Vaccine</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={{
              alignSelf: 'center',
            }}>
            <Text>click me 55555</Text>
          </TouchableOpacity>
        </Content>
        <TabMenu navigator={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

// <View
//   style={{
//     marginTop: 50,
//   }}>
//   {console.log('6')}
//   <Text>Hello World History</Text>

// </View>
