import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  mapContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 4,
    padding: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  calloutView: {
    flexDirection: "row",
    borderRadius: 10,
    height: 50,
    width: "80%",
    marginTop: 15,
    backgroundColor: "yellow",
  },
  calloutSearch: {
    borderColor: "transparent",
    paddingRight: 30,
    width: "90%",
    minWidth: 200,
    marginRight: 10,
    height: 40,
    borderWidth: 0.0,
  },
  searchButton: {
    position: "absolute",
    bottom: 45,
    right: 10,
  },
  modalView: {
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: 15,
    paddingHorizontal: 10,
    height: 38,
    borderRadius: 50,
  },
  weatherView: {
    position: "absolute",
    top: 300,
    left: 10,
    height: "25%",
    width: "18%",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
  },
  weatherText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  weatherIcon: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
});
