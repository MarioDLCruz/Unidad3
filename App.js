import React, { useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import Agenda from './src/screens/agenda';
import Configuracion from './src/screens/configuracion';
import Evento from './src/screens/evento';
import Inicio from './src/screens/Inicio';
import Organizar from './src/screens/organizar';
import Perfil from './src/screens/perfil';
import Recuerdos from './src/screens/recuerdos';
import Registro from './src/screens/registro';
import Sesion from './src/screens/sesion';
import Terminos from './src/screens/terminos';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen name="Agenda" component={Agenda} />
      <Drawer.Screen name="Configuracion" component={Configuracion} />
      <Drawer.Screen name="Evento" component={Evento} />
      <Drawer.Screen name="Inicio" component={Inicio} />
      <Drawer.Screen name="Organizar" component={Organizar} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Recuerdos" component={Recuerdos} />
      <Drawer.Screen name="Terminos" component={Terminos} />
    </Drawer.Navigator>
  );
}


function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      
      <Stack.Screen name="Sesion" component={Sesion} />
      <Stack.Screen name="Registro" component={Registro} />
     
      <Stack.Screen 
        name="MainApp" 
        component={DrawerNavigator}
        options={({ route }) => ({
          gestureEnabled: route.name !== 'Sesion' && route.name !== 'Registro',
        })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}