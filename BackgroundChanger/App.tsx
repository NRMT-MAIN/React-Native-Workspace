import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  const [bgState , setBgState] = useState('rgb(12, 1, 27)');

  const generateRandomColor = () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    setBgState(randomColor);
  };

  return (
    <>
        <StatusBar backgroundColor={'#000'} />
        <View style={[styles.container , {backgroundColor: bgState}]}>
            <TouchableOpacity onPress={generateRandomColor}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Click Me</Text>
                </View>
            </TouchableOpacity>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgb(2, 1, 3)',
    padding: 10,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#fff',
  } , 
  buttonText: {
    color: '#fff',
    fontSize: 24,
  }
})
