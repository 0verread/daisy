import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function AddTaskButton(){
  return(
    <View>
      <Button title="add"/>
    </View>
  )
}
const addTaskButtonStyles = StyleSheet.create({
 container: {
  flex: 1
 } 
})