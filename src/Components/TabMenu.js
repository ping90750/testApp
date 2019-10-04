import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Platform,
  Text,
  Dimensions
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Footer, FooterTab, Button} from 'native-base';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

type Props = {};

export default class DrawerMenu extends Component<Props> {
  static navigationOptions = ({navigation}) => {
    const {navigate} = this.props.navigation;
    return {header: null};
  };

  constructor(props) {
    super(props);
    this.state = {
      HomeActive: false,
      SettingsActive: false,
      HistoryActive: false,
      OtherActive: false
    };
  }

  async componentWillMount() {
    this.props.navigator.addListener('willFocus', payload => {
      this.props.navigator.setParams();
    });
    if (this.props.navigator.state.routeName === 'Home') {
      this.setState({HomeActive: true});
    } else if (this.props.navigator.state.routeName === 'Settings') {
      this.setState({SettingsActive: true});
    } else if (this.props.navigator.state.routeName === 'History') {
      this.setState({HistoryActive: true});
    } else if (this.props.navigator.state.routeName === 'Other') {
      this.setState({OtherActive: true});
    }
  }

  _redirectToSettings = () => {
    this.props.navigator.navigate('tabBarSettings');
  };

  _redirectToHome = () => {
    this.props.navigator.navigate('tabBarHome');
  };

  _redirectToHistory = () => {
    this.props.navigator.navigate('tabBarHistory');
  };
  _redirectToOther = () => {
    this.props.navigator.navigate('tabBarOther');
  };

  render() {
    return (<Footer>
      <FooterTab style={styles.footerStyle}>
        <Button onPress={() => this._redirectToHome()} style={this.state.HomeActive
            ? styles.activeMenuItem
            : styles.menuItem
}>
          <FontAwesomeIcon name="home" size={width * 0.1} style={this.state.HomeActive
              ? {
                color: '#317AFF'
              }
              : {
                color: '#636363'
              }
}/>
          <Text style={this.state.HomeActive
              ? {
                color: '#317AFF'
              }
              : {
                color: '#636363'
              }
}>
            {'Home'}
          </Text>
        </Button>
        <Button onPress={() => this._redirectToOther()} style={this.state.OtherActive
            ? styles.activeMenuItem
            : styles.menuItem
}>
          <FontAwesomeIcon name="home" size={width * 0.1} style={this.state.OtherActive
              ? {
                color: '#317AFF'
              }
              : {
                color: '#636363'
              }
}/>
          <Text style={this.state.OtherActive
              ? {
                color: '#317AFF'
              }
              : {
                color: '#636363'
              }
}>
            {'Other'}
          </Text>
        </Button>
        <Button onPress={() => this._redirectToHistory()} style={this.state.HistoryActive
            ? styles.activeMenuItem
            : styles.menuItem
}>
          <FontAwesomeIcon name="home" size={width * 0.1} style={this.state.HistoryActive
              ? {
                color: '#317AFF'
              }
              : {
                color: '#636363'
              }
}/>
          <Text style={this.state.HistoryActive
              ? {
                color: '#317AFF'
              }
              : {
                color: '#636363'
              }
}>
            {'History'}
          </Text>
        </Button>
        <Button onPress={() => this._redirectToSettings()} style={this.state.SettingsActive
            ? styles.activeMenuItem
            : styles.menuItem
}>
          <FontAwesomeIcon name="home" size={width * 0.1} style={this.state.SettingsActive
              ? {
                color: '#317AFF'
              }
              : {
                color: '#636363'
              }
}/>
          <Text style={this.state.SettingsActive
              ? {
                color: '#317AFF'
              }
              : {
                color: '#636363'
              }
}>
            {'Settings'}
          </Text>
        </Button>
      </FooterTab>
    </Footer>);
  }
}

const styles = StyleSheet.create({
  activeMenuItem: {
    backgroundColor: '#fff',
    borderRadius: 0
  },
  menuItem: {
    backgroundColor: '#fff',
    borderRadius: 0
  },
  imageLogo: {
    width: width * 0.05,
    height: height * 0.03
  },
  footerStyle: {
    backgroundColor: '#1A4A48'
  }
});
