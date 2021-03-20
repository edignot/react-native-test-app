import { StatusBar } from "expo-status-bar"
import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Edita!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
  },
})
