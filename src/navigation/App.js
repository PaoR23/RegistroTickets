import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { TicketProvider } from './context/TicketContext';

const App = () => {
  return (
    <TicketProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </TicketProvider>
  );
};

export default App;
