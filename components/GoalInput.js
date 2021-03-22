import React, { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

const GoalInput = ({ setGoal }) => {
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
    } else {
      alert("Please enter goal first")
    }
  }

  return (
    <View>
      <TextInput
        placeholder="enter"
        style={styles.inputContainer}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="add" onPress={addGoalHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: "#bebebe",
    borderWidth: 2,
    padding: 10,
    borderRadius: 50,
  },
})

export default GoalInput
