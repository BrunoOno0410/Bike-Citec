import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export const Speedometer = ({ speed }) => {
  return (
    <View style={styles.speedometer}>
      <Text style={styles.speed}>{speed ? speed.toFixed(0) : "0"}</Text>
      <Text style={styles.label}>km/h</Text>
    </View>
  );
};
