import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class ButtonGroup extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      buttonName,
      buttonName2,
      image,
      image2,
      onPress,
      onPress2,
    } = this.props;

    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            marginLeft: 50,
          }}>
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={{uri: image}}
            />
            <Text style={styles.textStyle}>{buttonName}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <TouchableOpacity onPress={onPress2} style={styles.button}>
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={{uri: image2}}
            />
            <Text style={styles.textStyle}>{buttonName2}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 5,
    width: width * 0.3,
    height: height * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 1,
    backgroundColor: '#0F3634',
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
    marginTop: 15,
  },
});
