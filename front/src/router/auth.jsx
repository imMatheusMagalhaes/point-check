import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Entrar" component={SignIn} />
      <AuthStack.Screen name="Cadastro" component={SignUp} />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
