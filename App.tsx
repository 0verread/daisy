import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';

import ZeroTasks from './src/screens/ZeroTasks';

export default function App() {
  return (
    <>
      <Header />
      <ZeroTasks></ZeroTasks>
    </>

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
