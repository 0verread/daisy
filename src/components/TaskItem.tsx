import React from "react";
import { StyleSheet, Text, View } from "react-native";

type TaskProps = {
  _id: number,
  name: string,
  active: true
}

const TaskItem = (props: any) => {
  return(
    <View style={taskItemStyles.todoContainer}>
      <Text style={taskItemStyles.todoTitle}>{props.item.name}</Text>
    </View>
  )
}

const taskItemStyles = StyleSheet.create({
	todoContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#E5E4E2",
		padding: 15,
		borderRadius: 10,
		marginBottom: 10,
	},
	todoTitle: {
		fontWeight: "bold",
		fontSize: 18,
		marginBottom: 8,
	},
})

export default TaskItem;