import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TicketForm from '../components/TicketForm';

const RegisterTicketScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Ticket</Text>
      <TicketForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
});

export default RegisterTicketScreen;

