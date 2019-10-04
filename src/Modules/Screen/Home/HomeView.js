import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {Container, Content, Text} from 'native-base';
import TabMenu from '../../../Components/TabMenu';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class HomeView extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      balance: '1,838,4141.06 ',
      email: 'test@gmail.com',
    };
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.cardView}>
            <View
              style={{
                alignSelf: 'center',
                marginTop: 20,
              }}>
              <Text
                style={{
                  color: '#A79565',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                TBD WALLET
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                }}>
                Current Balance
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
                marginTop: 40,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 36,
                }}>
                {this.state.balance}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              alignSelf: 'center',
            }}>
            <View style={styles.borderEmail}>
              <View
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    marginTop: 2,
                  }}>
                  {this.state.email}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                marginLeft: 10,
              }}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                }}
                source={require('../../../Image/share.png')}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <View style={styles.borderlineLeft} />
            <View
              style={{
                marginLeft: 10,
                marginRight: 10,
              }}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                }}
                source={require('../../../Image/thailand-baht.png')}
              />
            </View>
            <View style={styles.borderlineRight} />
          </View>
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
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  width: width * 0.3,
                  height: height * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowOpacity: 1,
                  backgroundColor: '#0F3634',
                }}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                  }}
                  source={require('../../../Image/thailand-baht.png')}
                />
                <Text>Tranfer</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  width: width * 0.3,
                  height: height * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#0F3634',
                  shadowOpacity: 1,
                }}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                  }}
                  source={require('../../../Image/thailand-baht.png')}
                />
                <Text>Scan QR</Text>
              </TouchableOpacity>
            </View>
          </View>
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
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  width: width * 0.3,
                  height: height * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowOpacity: 1,
                  backgroundColor: '#0F3634',
                }}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                  }}
                  source={require('../../../Image/thailand-baht.png')}
                />
                <Text>Deposit</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  width: width * 0.3,
                  height: height * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#0F3634',
                  shadowOpacity: 1,
                }}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                  }}
                  source={require('../../../Image/thailand-baht.png')}
                />
                <Text>Withdraw</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
        <TabMenu navigator={this.props.navigation} />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A4A48',
  },
  cardView: {
    width: width * 0.9,
    height: height * 0.25,
    marginTop: 30,
    alignSelf: 'center',
    backgroundColor: '#0F3634',
    borderRadius: 20,
    shadowOpacity: 2,
  },
  borderEmail: {
    borderWidth: 1,
    borderColor: 'white',
    width: width * 0.6,
    height: height * 0.035,
    borderRadius: 15,
  },
  borderlineLeft: {
    borderWidth: 1,
    width: width * 0.38,
    borderColor: '#FFFFFF',
    marginLeft: 20,
    height: 0,
    marginTop: 10,
  },
  borderlineRight: {
    borderWidth: 1,
    width: width * 0.38,
    borderColor: '#FFFFFF',
    marginRight: 20,
    height: 0,
    marginTop: 10,
  },
});
