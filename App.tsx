import { StyleSheet, Text, View } from 'react-native';

// components
import Header from './src/components/Header';
import AddTaskButton from './src/components/AddTaskButton';

// screens
import ZeroTasks from './src/screens/ZeroTasks';
import Tasks from './src/screens/Tasks';

export default function App() {
  return (
    <>
      <Header />
      <Tasks></Tasks>
      <AddTaskButton />
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
