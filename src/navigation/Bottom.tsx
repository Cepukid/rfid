import * as React from 'react';
import { Image } from 'react-native';
import {
  TransitionPresets,
  createStackNavigator
} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  IMAGES } from "../configs";
import Absen from "../screens/Absen";
import Pengumuman from "../screens/Pengumuman";
import Setting from "../screens/Setting";
import DetailPengumuman from "../screens/DetailPengumuman";

const Tab = createBottomTabNavigator();
const Stack= createStackNavigator();
function Home() {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad',height:200 }}
      >
        <Tab.Screen name="Pengumuman" component={Pengumuman} 
        options={{
            tabBarIcon: ({ color }) => (
                <Image source={IMAGES.logo} style={{width:30,height:30}}/>
            ),
        }}/>
        <Tab.Screen name="Absen" component={Absen} />
        <Tab.Screen name="Settings" component={Setting} />
      </Tab.Navigator>
      
  );
}
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}options={{ header: () => null }} />
      <Stack.Screen name="DetailPengumuman" component={DetailPengumuman} options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}