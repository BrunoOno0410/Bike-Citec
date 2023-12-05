import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  speedometer: {
    position: "absolute",
    bottom: 35,
    left: 10,
    padding: 10,
    backgroundColor: "rgba(63, 63, 63, 0.75)",
    borderRadius: 2000,
    width: 70,
    height: 70,
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: "white",
  },
  speed: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
