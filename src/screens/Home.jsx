import { Text, View, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = ({ navigation }) => {
  
  return (
    <SafeAreaView>
      <View style={styles.card}>
        <Text style={styles.text}>Home screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: { height: '100%', backgroundColor: '#f5b2b2', width: '100%', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 16 },
});
