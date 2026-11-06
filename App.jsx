import { Text, View, Image, Button, useColorScheme, TouchableOpacity, TouchableHighlight, Alert, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Home} from './src/screens/Home';
import {Profile} from './src/screens/Profile';

import React, { useState } from 'react';
import { TextInput } from 'react-native';
  
const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Home />
      <Profile />
    </View>
  )
}
  

const App = () => {

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.title}> WellCome </Text>
      
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {  flex: 1, backgroundColor: 'pink',alignItems: 'center', justifyContent: 'center',gap: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  input: { width: '80%', height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginTop: 20 }
})

