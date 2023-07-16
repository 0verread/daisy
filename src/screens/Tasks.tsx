import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";


type TaskProps = {
  onDelete : () => void;
  text: string
}

const Tasks = ({ onDelete, text}: TaskProps) => {
  return(
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.taskText}>{text}</Text>
        <TouchableOpacity onPress={onDelete}>
          delete
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
    paddingVertical: 12,
    paddingRight: 3,
    borderBottomWidth: 1,
    borderColor: "#E9EDF2",
  },
  taskText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#1F242B",
    flexWrap: "wrap",
    width: "85%",
    lineHeight: 22,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
})
