const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
false;
import Finance from "./screens/Finance";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Login1 from "./screens/Login1";
import Login2 from "./screens/Login2";
import GroupScreen from "./screens/GroupScreen";
import Overdue from "./screens/Overdue";
import Cleared from "./screens/Cleared";
import TransferSuccess from "./screens/TransferSuccess";
import FingerPrint from "./screens/FingerPrint";
import EnterPin from "./screens/EnterPin";
import RequestMoney2 from "./screens/RequestMoney2";
import Finance1 from "./screens/Finance1";
import Next1 from "./screens/Next1";
import MainHome from "./screens/MainHome";
import MainHome1 from "./screens/MainHome1";
import More from "./screens/More";
import CongratsCredit from "./screens/CongratsCredit";
import SignUp1 from "./screens/SignUp1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Finance"
              component={Finance}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login2"
              component={Login2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group35191"
              component={GroupScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Overdue"
              component={Overdue}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cleared"
              component={Cleared}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransferSuccess"
              component={TransferSuccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FingerPrint"
              component={FingerPrint}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EnterPin"
              component={EnterPin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RequestMoney2"
              component={RequestMoney2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Finance1"
              component={Finance1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Next1"
              component={Next1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainHome"
              component={MainHome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainHome1"
              component={MainHome1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="More"
              component={More}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CongratsCredit"
              component={CongratsCredit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp1"
              component={SignUp1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
