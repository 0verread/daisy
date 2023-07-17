import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, FlatList } from "react-native";
import TaskItem from "../components/TaskItem";


type TaskProps = {
  onDelete : () => void;
  text: string
}

const data = [
  {_id: 1, name: "task1", active: true},
  {_id: 2, name: "task1", active: true},
  {_id: 3, name: "task1", active: true}
]

const Tasks = () => {
  return(
    <View style={styles.container}>
      <FlatList
      data={data}
      renderItem={TaskItem}
      />
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

export default Tasks;

