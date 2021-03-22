import React, { useState } from "react"
import { View, TextInput, Button, StyleSheet, Modal } from "react-native"

const GoalInput = ({ setGoal, isModalVisible, setIsModalVisible }) => {
  const [enteredGoal, setEnteredGoal] = useState("")

  const goalInputHandler = (input) => {
    setEnteredGoal(input)
  }

  const addGoalHandler = () => {
    if (enteredGoal) {
      setGoal((currentGoals) => [
        ...currentGoals,
        { key: Math.random().toString(), value: enteredGoal },
      ])
      setEnteredGoal("")
      setIsModalVisible(!isModalVisible)
    } else {
      alert("Please enter goal first")
    }
  }

  return (
    <Modal visible={isModalVisible} animationType="slide" style>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="enter"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="add" onPress={addGoalHandler} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: "#bebebe",
    borderWidth: 2,
    padding: 10,
    borderRadius: 50,
  },
  inputContainer: {
    justifyContent: "center",
    flex: 1,
  },
})

export default GoalInput
