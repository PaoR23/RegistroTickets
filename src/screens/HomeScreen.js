import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>Registro de Tickets</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Registrar Ticket')}
      >
        <Text style={styles.buttonText}>Registrar Ticket</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#388e3c', marginTop: 16 }]}
        onPress={() => navigation.navigate('Lista de Tickets')}
      >
        <Text style={styles.buttonText}>Ver Lista de Tickets</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2a2a2a',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 32,
    color: '#555',
  },
  button: {
    backgroundColor: '#1976d2',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;