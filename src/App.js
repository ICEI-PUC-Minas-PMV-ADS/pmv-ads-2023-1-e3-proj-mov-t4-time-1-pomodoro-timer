import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/pages/Login/Login'
import Cadastro from './src/pages/Cadastro/Cadastro'
import Tarefas from './src/pages/Tarefas/Tarefas'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Cadastro"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Tarefas" component={Tarefas} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
