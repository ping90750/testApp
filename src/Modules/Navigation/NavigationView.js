import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeView from '../Screen/Home/HomeView';
import SettingsView from '../Screen/Settings/SettingsView';
import HistoryView from '../Screen/History/HistoryView';
import OtherView from '../Screen/Other/OtherView';

const HomeStack = createStackNavigator({
  Home: {screen: HomeView},
});
const SettingsStack = createStackNavigator({
  Settings: {screen: SettingsView},
});
const HistoryStack = createStackNavigator({
  History: {
    screen: HistoryView,
  },
});

const OtherStack = createStackNavigator({
  Other: {
    screen: OtherView,
  },
});
const AppTabNavigator = createBottomTabNavigator(
  {
    tabBarHome: {
      screen: HomeStack,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
    tabBarOther: {
      screen: OtherStack,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
    tabBarHistory: {
      screen: HistoryStack,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
    tabBarSettings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
  },
  {
    backBehavior: 'none',
    animationEnabled: false,
    swipeEnabled: false,
    headerMode: 'none',
  },
);

const AppNavigator = createSwitchNavigator(
  {
    App: AppTabNavigator,
    Home: HomeStack,
    Settings: SettingsStack,
    Other: OtherStack,
    History: HistoryStack,
  },
  {initialRouteName: 'App'},
);
const NavigationView = createAppContainer(AppNavigator);

export default NavigationView;
