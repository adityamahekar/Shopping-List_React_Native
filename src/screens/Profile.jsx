
import { Text, View, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Profile = () => {


  return (
    <SafeAreaView >
    <View style={styles.card}>
      <Text style={styles.text}>Profile</Text>
      <Text style={styles.text}>ID: </Text>
      <Text style={styles.text}>Name:</Text>
      <Button title="Go to Search" onPress={() => navigation.navigate('Search', { id: '', name: " " })} />
    </View></SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: { padding: 16, marginTop: 12, borderRadius: 8, backgroundColor: '#f3a3a3' },
  text: { fontSize: 16 },
});
