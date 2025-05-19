import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { TicketContext } from '../context/TicketContext';

const TicketList = () => {
  const { tickets } = useContext(TicketContext);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      {item.foto && (
        <Image source={{ uri: item.foto }} style={styles.image} />
      )}
      <View style={styles.info}>
        <Text style={styles.nombre}>{item.nombre}</Text>
        <Text style={styles.dependencia}>{item.dependencia}</Text>
        <Text style={styles.descripcion}>{item.descripcion}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={tickets}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListEmptyComponent={<Text style={styles.empty}>No hay tickets registrados.</Text>}
      contentContainerStyle={tickets.length === 0 && { flex: 1, justifyContent: 'center' }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 12,
    alignItems: 'center',
    elevation: 1,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  nombre: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  dependencia: {
    color: '#555',
    marginBottom: 4,
  },
  descripcion: {
    color: '#333',
  },
  empty: {
    textAlign: 'center',
    color: '#888',
    marginTop: 40,
    fontSize: 16,
  },
});

export default TicketList;

