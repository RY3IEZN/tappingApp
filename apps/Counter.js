/** @format */

import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{}</Text>
      <Text style={styles.text}> Taps: {count} </Text>
      <View style={styles.container2}>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
        <Text> </Text>
        <Button title="Decrease" onPress={() => setCount(count - 1)} />
        <Text> </Text>
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b2beb5",
    padding: 10,
  },
  container2: {
    paddingTop: 10,
    flexDirection: "row",
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
export default Counter;
