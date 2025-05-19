import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TicketList from '../components/TicketList';

const TicketListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tickets</Text>
      <TicketList />
    </View>
  );
};

const styles = StyleSheet.create({
  // ... tus estilos aquí ...
});

export default TicketListScreen;
