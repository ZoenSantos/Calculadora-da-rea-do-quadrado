import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const SquareAreaCalculator = () => {
  const [sideLength, setSideLength] = useState('');
  const [area, setArea] = useState(null);

  const calculateArea = () => {
    const side = parseFloat(sideLength);
    const calculatedArea = side * side;
    setArea(calculatedArea);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área de Quadrado</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o lado do quadrado"
        onChangeText={(text) => setSideLength(text)}
        keyboardType="numeric"
        value={sideLength}
      />
      <Button title="Calcular Área" onPress={calculateArea} />
      {area !== null && (
        <Text style={styles.result}>Área do quadrado: {area}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: '#255c23',
    padding: 20,
    color: '#fff',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default SquareAreaCalculator;
