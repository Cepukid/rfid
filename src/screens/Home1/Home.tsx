import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from "../Home";
import Absen from "../Absen";
import Setting from "../Setting";
const Tab = createMaterialBottomTabNavigator();

const Home1 = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Absen" component={Absen} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
};
export default Home1;