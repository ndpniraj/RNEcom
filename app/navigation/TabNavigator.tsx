import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../views/Home';
import Cart from '../views/Cart';
import Fav from '../views/Fav';
import Profile from '../views/Profile';
import {createStaticNavigation} from '@react-navigation/native';
import {Text} from 'react-native';

const Tabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        tabBarIcon({}) {
          return <Text>H</Text>;
        },
        tabBarBadge: 9,
      },
    },
    Cart,
    Fav,
    Profile,
  },
});

const TabNavigator = createStaticNavigation(Tabs);

export default TabNavigator;
