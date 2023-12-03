import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import { Button } from 'react-native';
import { useAuth } from '../contexts/auth';

const AppStack = createNativeStackNavigator();


function AppRoutes() {
  const { sign_out } = useAuth();
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} options={{
        headerRight: () => (
          <Button
            onPress={sign_out}
            title="Sair"
            color="black"

          />
        ),
      }} />
    </AppStack.Navigator>
  );
}

export default AppRoutes;