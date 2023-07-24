import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function AddTaskButton(){
  return(
    <View style={addTaskButtonStyles.container}>
      <Button title="add"/>
    </View>
  )
}
const addTaskButtonStyles = StyleSheet.create({
 container: {
  // flexDirection: "row",
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center'

 } 
})