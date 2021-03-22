import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const GoalItem = ({ children, removeGoal, id }) => {
  return (
    <TouchableOpacity onPress={() => removeGoal(id)}>
      <View style={styles.listItem}>
        <Text>{children}</Text>
      </View>
    </TouchableOpacity>
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
