import React, {useState,useEffect} from 'react';
import { Text, View, Button, Alert,StyleSheet } from 'react-native';

/* 
LINK APRENDIZADO:
https://webdesignemfoco.com/cursos/react-js/meu-primeiro-app-com-react-native-06-navegacao-entre-telas

INSTALAÇÕES:
npm install @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack
*/ 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro';


export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name="Estoque" component={Home} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
      </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#606060',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
