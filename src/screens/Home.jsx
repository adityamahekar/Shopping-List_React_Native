import { Text, View, StyleSheet, Button } from 'react-native';

export const Home = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Home screen</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: { padding: 16, marginTop: 12, borderRadius: 8, backgroundColor: '#f2f2f2' ,width: '100%', alignItems: 'center', justifyContent: 'center'},
  text: { fontSize: 16 },
});
