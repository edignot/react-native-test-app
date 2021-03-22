import React, { useState } from "react"
import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"
import { StyleSheet, View, FlatList, Button } from "react-native"

export default function App() {
  const [goals, setGoal] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  const removeGoal = (goalId) => {
    setGoal((currentGaols) => [
      ...currentGaols.filter((goal) => goal.key !== goalId),
    ])
  }

  const isModalVisibleHandler = () => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <View style={styles.screen}>
      <Button title="+" onPress={isModalVisibleHandler} />
      <GoalInput
        goals={goals}
        setGoal={setGoal}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
      <View>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem removeGoal={removeGoal} id={itemData.item.key}>
              {itemData.item.value}
            </GoalItem>
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
})
