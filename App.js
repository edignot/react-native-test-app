import React, { useState } from "react"
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native"

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("")
  const [goals, setGoal] = useState([])

  const goalInputHandler = (input) => {
    setEnteredGoal(input)
  }

  const addGoalHandler = () => {
    if (enteredGoal) {
      setGoal((currentGoals) => [...currentGoals, enteredGoal])
      setEnteredGoal("")
    } else {
      alert("Please enter goal first")
    }
  }

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
      <View>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text>{itemData.item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    padding: 20,
    paddingTop: 80,
  },
  inputContainer: {
    borderColor: "#bebebe",
    borderWidth: 2,
    padding: 10,
    borderRadius: 50,
  },
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

// expo init
// npm start
// core components
// by default every View in react native uses flexbox
// default flex direction column
// justifyContent - positions flex items on the main axis
// alignItems - positions flex items on the cross axis
// screen is not scrollable by default
// ScrollView - for content that you cannot guarantee to fit on the screen, might be inefficient because it renders all the elements in advance, not great for long lists
// FlatList - for infinite lists, alternative to ScrollView
