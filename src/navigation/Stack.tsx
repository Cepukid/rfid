import React from "react";
import {
  TransitionPresets,
  createStackNavigator
} from "@react-navigation/stack";

import Home from "../screens/Home";
import Home1 from "../screens/Home1";
import Absen from "../screens/Absen";
import Setting from "../screens/Setting";
// import {createBottomTabNavigator} from 'react-navigation-tabs';

import i18n from "../I18n";

const { Navigator, Screen } = createStackNavigator();

const Stack = () => (
  <Navigator
    initialRouteName="Absen"
    screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
  >
    <Screen name="Home" component={Home} options={{ header: () => null }} />
    <Screen name="Home1" component={Home1} options={{ header: () => null }} />
    <Screen name="Absen" component={Absen} options={{ header: () => null }} />
    <Screen
      name="Setting"
      component={Setting}
      options={{ title: i18n.t("setting") }}
    />
  </Navigator>
);

// const App = createBottomTabNavigator(
//   {
//     Home: { screen: Home },
//     Settings: { screen: Setting },
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let IconComponent = Ionicons;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//         } else if (routeName === 'Settings') {
//           iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
//         }
//         return <IconComponent name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: '#42f44b',
//       inactiveTintColor: 'gray',
//     },
//   }
// );
export default Stack;
