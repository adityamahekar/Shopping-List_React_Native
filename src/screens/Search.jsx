import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export const Search = () => {

  return (
    <SafeAreaView >
    <View style={styles.card}>
      <Text style={styles.text}>Search</Text>
      <Text style={styles.text}>ID: </Text>
      <Text style={styles.text}>Name: </Text>
    </View></SafeAreaView>
  )
}

const styles = StyleSheet.create({

  card: { padding: 16, marginTop: 12, borderRadius: 8, backgroundColor: '#d88181' },
  text: { fontSize: 16 },
});