import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RegisterTicketScreen from '../screens/RegisterTicketScreen';
import TicketListScreen from '../screens/TicketListScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Registrar Ticket" component={RegisterTicketScreen} />
      <Stack.Screen name="Lista de Tickets" component={TicketListScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
