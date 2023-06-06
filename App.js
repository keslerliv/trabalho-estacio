import * as React from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import UserInfoScreen from './screens/UserInfoScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name="MenuScreen"
            component={MenuScreen}
            options={{
              headerShown: false
            }} />
            <Stack.Screen
            name="UserInfoScreen"
            component={UserInfoScreen}
            options={{
              headerShown: false
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
