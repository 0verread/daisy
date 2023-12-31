import React from "react";
import { StyleSheet, View, Text } from "react-native";


const Header = () => {
  return(
    <View style={styles.header}>
      <Text style={styles.today}>today</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingTop: 68,
    paddingBottom: 24,
  },
  today: {
    fontWeight: 'bold',
    fontSize: 36
  }
})

export default Header;