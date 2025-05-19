import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet, Platform } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const TicketForm = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [dependencia, setDependencia] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [foto, setFoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChoosePhoto = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.5 }, (response) => {
      if (!response.didCancel && !response.errorCode && response.assets && response.assets.length > 0) {
        setFoto(response.assets[0].uri);
      }
    });
  };

  const handleTakePhoto = () => {
    launchCamera({ mediaType: 'photo', quality: 0.5 }, (response) => {
      if (!response.didCancel && !response.errorCode && response.assets && response.assets.length > 0) {
        setFoto(response.assets[0].uri);
      }
    });
  };

  const handleSubmit = async () => {
    if (nombre && dependencia && descripcion) {
      setLoading(true);
      let fotoUrl = null;
      try {
        if (foto) {
          const filename = `tickets/${Date.now()}.jpg`;
          const reference = storage().ref(filename);
          const uploadUri = Platform.OS === 'ios' ? foto : foto.replace('file://', '');
          await reference.putFile(uploadUri);
          fotoUrl = await reference.getDownloadURL();
        }
        await firestore().collection('tickets').add({
          nombre,
          dependencia,
          descripcion,
          foto: fotoUrl,
          fecha: new Date(),
        });
        setNombre('');
        setDependencia('');
        setDescripcion('');
        setFoto(null);
        if (navigation) navigation.navigate('Lista de Tickets');
      } catch (error) {
        alert('Error al guardar el ticket: ' + error.message);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Por favor completa todos los campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre del solicitante</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Nombre"
      />
      <Text style={styles.label}>Dependencia</Text>
      <TextInput
        style={styles.input}
        value={dependencia}
        onChangeText={setDependencia}
        placeholder="Dependencia"
      />
      <Text style={styles.label}>Descripción del caso/problema</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        value={descripcion}
        onChangeText={setDescripcion}
        placeholder="Descripción"
        multiline
      />
      <View style={styles.photoButtons}>
        <Button title="Tomar Foto" onPress={handleTakePhoto} />
        <Button title="Subir Foto" onPress={handleChoosePhoto} />
      </View>
      {foto && <Image source={{ uri: foto }} style={styles.image} />}
      <Button title={loading ? 'Guardando...' : 'Guardar Ticket'} onPress={handleSubmit} disabled={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    marginTop: 4,
  },
  photoButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 12,
    alignSelf: 'center',
  },
});

export default TicketForm;
