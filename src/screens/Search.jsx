import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Search = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Search</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: { padding: 16, marginTop: 12, borderRadius: 8, backgroundColor: '#f2f2f2' ,width: '100%', alignItems: 'center', justifyContent: 'center'},
  text: { fontSize: 16 },
});
