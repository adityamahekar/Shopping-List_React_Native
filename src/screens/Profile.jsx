import { Text, View, StyleSheet } from 'react-native';

export const Profile = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { padding: 16, marginTop: 12, borderRadius: 8, backgroundColor: '#f2f2f2' },
  text: { fontSize: 16 },
});
