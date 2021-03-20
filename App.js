import React, { useState } from "react"
import { Button, StyleSheet, Text, View, TextInput } from "react-native"

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("")
  const [goals, setGoal] = useState([])

  const goalInputHandler = (input) => {
    setEnteredGoal(input)
  }

  const addGoalHandler = () => {
    setGoal([...goals, enteredGoal])
    setEnteredGoal("")
  }

  const displayedGoals = goals.map((goal) => <Button title={goal} />)

  return (
    <View style={styles.screen}>
      <View>
        <TextInput
          placeholder="enter"
          style={styles.inputContainer}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="add" onPress={addGoalHandler} />
      </View>
      <View>{displayedGoals}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    borderWidth: 1,
    borderColor: "red",
    height: "100%",
    justifyContent: "center",
  },
  inputContainer: {
    borderColor: "#bebebe",
    borderWidth: 2,
    padding: 10,
    borderRadius: 50,
  },
})

// expo init
// npm start
// core components
// by default every View in react native uses flexbox
// default flex direction column
// justifyContent - positions flex items on the main axis
// alignItems - positions flex items on the cross axis
