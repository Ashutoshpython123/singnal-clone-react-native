import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from './screens/HomeScreen'
import AddChatScreen from './screens/AddChatScreen'
import ChatScreen from './screens/ChatScreen'


const stack = createStackNavigator();
const globalScreenOptions ={
  headerStyle : {backgroundColor: "lightblue"},
  headerTitleStyle :{color: "white"},
  headerTinStyle: "white",
}
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home" screenOptions={globalScreenOptions}>
        <stack.Screen name="login" component={LoginScreen} />
        <stack.Screen name="Register" component={RegisterScreen} />
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="AddChat" component={AddChatScreen} />
        <stack.Screen name="Chat" component={ChatScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



///*"firebase": "7.9.0"*/
