import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ZeroTasks = () => {
  return (
    <View style={styles.zeroTasksContainer}>
      <Text style={styles.zeroTasksMsg}>no more tasks for today. yayy</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  zeroTasksContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  zeroTasksMsg: {
    fontSize: 16
  }
});

export default ZeroTasks;