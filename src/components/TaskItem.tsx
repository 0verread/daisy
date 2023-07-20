import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type TaskProps = {
  _id: number,
  name: string,
  active: true
}

const TaskItem = (tasks: any) => {
  return(
		<TouchableOpacity>
    	<View style={taskItemStyles.todoContainer}>
				
					<Text>{tasks.item.name}</Text>
    	</View>
		</TouchableOpacity>

  )
}

const taskItemStyles = StyleSheet.create({
	todoContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#E5E4E2",
		padding: 14,
		borderRadius: 10,
		marginBottom: 10,
		borderColor: "black",
		borderWidth: 1
	},
	todoTitle: {
		fontWeight: "normal",
		fontSize: 18,
		// marginBottom: 8,
	},
})

export default TaskItem;