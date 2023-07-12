import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';

export default function App() {
  return (
    <Header />
    // <View style={styles.container}>
    //   <Text style={styles.name}>daisy</Text>
    //   <Text>make your today easy</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'

  },
  name: {
    fontWeight: 'bold',
    fontSize: 36
  }
});
