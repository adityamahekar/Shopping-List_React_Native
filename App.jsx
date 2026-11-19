import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => (
  <View style={styles.container}>
    <HomeScreen />
  </View>
);

const styles = StyleSheet.create({
  container: {  padding: 20, backgroundColor: '#e89494' },
});

export default App;
