import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { useState } from 'react';

// Import child screen components
import Create from './CreateScreen';
import AllItems from './AllItems';
import LowStock from './LowStock';

// // data.js
// export const data = 


export default function HomeScreen() {

  // Store the currently selected screen
  const [view, setView] = React.useState('dashboard');
  const [data, setdata] = React.useState([
    { id: 1, name: 'wheat', stock: 5, unit: 'kg' },
    { id: 2, name: 'rice', stock: 10, unit: 'kg' },
    { id: 3, name: 'sugar', stock: 2, unit: 'kg' },
    { id: 4, name: 'salt', stock: 0, unit: 'kg' },
    { id: 5, name: 'oil', stock: 15, unit: 'liters' },
    { id: 6, name: 'flour', stock: 3, unit: 'kg' },
    { id: 7, name: 'tea', stock: 8, unit: 'kg' },
    { id: 8, name: 'coffee', stock: 1, unit: 'kg' },
    { id: 9, name: 'milk', stock: 20, unit: 'liters' },
    { id: 10, name: 'eggs', stock: 12, unit: 'pieces' },
    { id: 11, name: 'butter', stock: 4, unit: 'kg' },
    { id: 12, name: 'cheese', stock: 6, unit: 'kg' },
    { id: 13, name: 'yogurt', stock: 0, unit: 'liters' },
    { id: 14, name: 'chicken', stock: 7, unit: 'kg' },
    { id: 15, name: 'fish', stock: 0, unit: 'kg' },
    { id: 16, name: 'beef', stock: 9, unit: 'kg' },
    { id: 17, name: 'pork', stock: 0, unit: 'kg' },
    { id: 18, name: 'lamb', stock: 5, unit: 'kg' },
    { id: 19, name: 'turkey', stock: 0, unit: 'kg' },
    { id: 20, name: 'duck', stock: 3, unit: 'kg' },
    { id: 21, name: 'bread', stock: 10, unit: 'loaves' },
    { id: 22, name: 'pasta', stock: 0, unit: 'kg' },
    { id: 23, name: 'noodles', stock: 8, unit: 'kg' },
    { id: 24, name: 'cereal', stock: 8, unit: 'boxes' },
    { id: 25, name: 'oats', stock: 6, unit: 'kg' },
    { id: 26, name: 'cornflakes', stock: 0, unit: 'boxes' },
    { id: 27, name: 'biscuits', stock: 4, unit: 'packs' },
    { id: 28, name: 'cookies', stock: 0, unit: 'packs' },
    { id: 29, name: 'chocolate', stock: 7, unit: 'bars' },
    { id: 30, name: 'candy', stock: 0, unit: 'packs' },
  ]
  );

  return (
    <View style={styles.container}>

      {/* Dashboard heading */}
      <Text style={styles.title}>Dashboard</Text>

      {/* Navigation buttons */}
      <View style={styles.buttonContainer}>

        {/* All Items button */}
        <Pressable style={[styles.button, view === 'allItems' && styles.activeButton]} onPress={() => setView('allItems')}>
          <Text style={styles.btnText}>All Items</Text>
        </Pressable>

        {/* Low Stock button */}
        <Pressable style={[styles.button, view === 'lowStock' && styles.activeButton]} onPress={() => setView('lowStock')}>
          <Text style={styles.btnText}>Low Stock</Text>
        </Pressable>

        {/* Create button */}
        <Pressable style={[styles.button, view === 'create' && styles.activeButton]} onPress={() => setView('create')}>
          <Text style={styles.btnText}>Create</Text>
        </Pressable>

      </View>

      {/* Display selected screen */}
      {view === 'allItems' && <AllItems data={data} />}
      {view === 'lowStock' && <AllItems data={data.filter(item => item.stock < 5)} />}
      {view === 'create' && <Create data={data} setdata={setdata} />}

    </View>
  );
}

// Stylesheet for dashboard UI
const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5b2b2',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3b1414',
  },

  body: {
    marginTop: 8,
    fontSize: 15,
    color: '#5c2a2a',
  },

  btnText: {
    fontSize: 16,
    color: '#fff',
  },

  button: {
    backgroundColor: '#3b1414',
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },

  activeButton: {
    backgroundColor: '#ff3737',
  },

});
