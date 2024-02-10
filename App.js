import React from "react";
import { StatusBar, Text } from "react-native";
import { NavigationContainer as Container } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./Component/WelcomeScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {
  return (
    <Container>
      <StatusBar />
      <Navigator>
        <Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false
          }}
        />
      </Navigator>
    </Container>
  );
}

export default App;