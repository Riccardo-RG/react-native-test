import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack"; // Importa createStackNavigator invece di createNativeStackNavigator

import HomeScreen from "./screen/HomeSceen";
import FirstScreen from "./screen/FirstScreen";
import SecondScreen from "./screen/SecondScreen";
import ThirdScreen from "./screen/ThirdScreen";
import Detail1 from "./screen/Detail1";
import Detail2 from "./screen/Detail2";
import Detail3 from "./screen/Detail3";
import Detail4 from "./screen/Detail4";
import Detail5 from "./screen/Detail5";
import Detail6 from "./screen/Detail6";
import Detail7 from "./screen/Detail7";
import Detail8 from "./screen/Detail8";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Usa createStackNavigator invece di createNativeStackNavigator
const SecondStack = createStackNavigator();
const ThirdStack = createStackNavigator();
const FourthStack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="A" component={HomeScreen} />
      <Stack.Screen name="Detail1" component={Detail1} />
      <Stack.Screen name="Detail2" component={Detail2} />
    </Stack.Navigator>
  );
}

function SecondStackNavigator() {
  return (
    <Stack.Navigator>
      <SecondStack.Screen name="B" component={FirstScreen} />
      <SecondStack.Screen name="Detail3" component={Detail3} />
      <SecondStack.Screen name="Detail4" component={Detail4} />
    </Stack.Navigator>
  );
}

function TreeStackNavigator() {
  return (
    <Stack.Navigator>
      <ThirdStack.Screen name="C" component={SecondScreen} />
      <ThirdStack.Screen name="Detail5" component={Detail5} />
      <ThirdStack.Screen name="Detail6" component={Detail6} />
    </Stack.Navigator>
  );
}

function FourthStackNavigator() {
  return (
    <Stack.Navigator>
      <SecondStack.Screen name="D" component={ThirdScreen} />
      <SecondStack.Screen name="Detail7" component={Detail7} />
      <SecondStack.Screen name="Detail8" component={Detail8} />
    </Stack.Navigator>
  );
}
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="-A-" component={StackNavigator} />
      <Tab.Screen name="-B-" component={SecondStackNavigator} />
      <Tab.Screen name="-C-" component={TreeStackNavigator} />
      <Tab.Screen name="-D-" component={FourthStackNavigator} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
