import React from "react"
import { View, Text, StyleSheet } from "react-native"

const GoalItem = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <Text>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: "#bebebe",
    backgroundColor: "#eee",
    borderWidth: 2,
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 10,
  },
})

export default GoalItem
