import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const handleAddTaskButton = () => {
  
}

export default function AddTaskButton(){
  return(
      <View style={addTaskButtonStyles.container}>
        <TouchableOpacity onPress={() => handleAddTaskButton()}>
          <View style={addTaskButtonStyles.addTaskWrapper}>
            <Text style={addTaskButtonStyles.addTaskText}>Add a task</Text>
          </View>
        </TouchableOpacity>
      </View>
  )
}
const addTaskButtonStyles = StyleSheet.create({
 container: {
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center'
 },
 addTaskWrapper: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#FFF',
  borderRadius: 60,
  borderColor: '#C0C0C0',
  borderWidth: 1,
  width: 240,
  alignItems: "center"
 },
 addTaskText: {
  fontSize: 16,
  fontWeight: "600"
 }
})