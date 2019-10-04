import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, Image} from 'react-native';
import {Container, Content, Text} from 'native-base';
import TabMenu from '../../../Components/TabMenu';
import ButtonGroup from "../../../Components/ButtonGroup";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class HomeView extends Component<Props> {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      balance: '1,838,4141.06 ',
      email: 'test@gmail.com',
      dataButton: [
        {
          name: "Transfer",
          image: "https://firebasestorage.googleapis.com/v0/b/uploadfile-cc5a1.appspot.com/o/transfer.png?alt=media&token=83d9ecd8-5b67-4453-b580-8747d739731b"
        }, {
          name: "Scan QR",
          image: "https://firebasestorage.googleapis.com/v0/b/uploadfile-cc5a1.appspot.com/o/qr-code.png?alt=media&token=2a9b3fdf-6778-4d81-b56b-473b17478aa1"
        }, {
          name: "Deposit",
          image: "https://firebasestorage.googleapis.com/v0/b/uploadfile-cc5a1.appspot.com/o/currency.png?alt=media&token=88b01be6-62bc-4821-9c59-2f382c1ae0f8"
        }, {
          name: "Withdraw",
          image: "https://firebasestorage.googleapis.com/v0/b/uploadfile-cc5a1.appspot.com/o/loss.png?alt=media&token=8753ad9c-251f-49d3-ad92-ad4f6567a4e4"
        }
      ]
    };

  }
  render() {
    return (<Container style={styles.container}>
      <Content>
        <View style={styles.cardView}>
          <View style={{
              alignSelf: 'center',
              marginTop: 20
            }}>
            <Text style={{
                color: '#A79565',
                fontSize: 20,
                fontWeight: 'bold'
              }}>
              TBD WALLET
            </Text>
          </View>
          <View style={{
              alignSelf: 'center'
            }}>
            <Text style={{
                color: 'white',
                fontSize: 14
              }}>
              Current Balance
            </Text>
          </View>
          <View style={{
              alignSelf: 'center',
              marginTop: 40
            }}>
            <Text style={{
                color: 'white',
                fontSize: 36
              }}>
              {this.state.balance}
            </Text>
          </View>
        </View>
        <View style={{
            flexDirection: 'row',
            marginTop: 15,
            alignSelf: 'center'
          }}>
          <View style={styles.borderEmail}>
            <View style={{
                justifyContent: 'center',
                alignSelf: 'center'
              }}>
              <Text style={{
                  marginTop: 2
                }}>
                {this.state.email}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{
              marginLeft: 10
            }}>
            <Image style={{
                width: 30,
                height: 30
              }} source={require('../../../Image/share.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{
            flexDirection: 'row',
            marginTop: 20
          }}>
          <View style={styles.borderlineLeft}/>
          <View style={{
              marginLeft: 10,
              marginRight: 10
            }}>
            <Image style={{
                width: 30,
                height: 30
              }} source={require('../../../Image/thailand-baht.png')}/>
          </View>
          <View style={styles.borderlineRight}/>
        </View>
        <ButtonGroup buttonName={this.state.dataButton[0].name} buttonName2={this.state.dataButton[1].name} image={this.state.dataButton[0].image} image2={this.state.dataButton[1].image}/>
        <ButtonGroup buttonName={this.state.dataButton[2].name} buttonName2={this.state.dataButton[3].name} image={this.state.dataButton[2].image} image2={this.state.dataButton[3].image}/>
      </Content>
      <TabMenu navigator={this.props.navigation}/>
    </Container>);
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A4A48'
  },
  cardView: {
    width: width * 0.9,
    height: height * 0.25,
    marginTop: 30,
    alignSelf: 'center',
    backgroundColor: '#0F3634',
    borderRadius: 20,
    shadowOpacity: 2
  },
  borderEmail: {
    borderWidth: 1,
    borderColor: 'white',
    width: width * 0.6,
    height: height * 0.035,
    borderRadius: 15
  },
  borderlineLeft: {
    borderWidth: 1,
    width: width * 0.38,
    borderColor: '#FFFFFF',
    marginLeft: 20,
    height: 0,
    marginTop: 10
  },
  borderlineRight: {
    borderWidth: 1,
    width: width * 0.38,
    borderColor: '#FFFFFF',
    marginRight: 20,
    height: 0,
    marginTop: 10
  }
});
//
//<ButtonGroup/>