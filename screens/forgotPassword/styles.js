import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#04062C",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {},
  logo: {
    width: 75,
    height: 75,
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  textView: {
    color: "white",
    fontSize: 16,
  },
  brandTitle: {
    color: "white",
    fontSize: 32,
    marginBottom: 30,
  },
  textInput: {
    color: "white",
    borderRadius: 4,
    borderColor: "white",
    borderWidth: 2,
    width: "70%",
    minWidth: 300,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  forgotButton: {
    height: 30,
    marginBottom: 30,
  },
  loginButton: {
    width: "70%",
    //backgroundColor: "#3FC43F",
    backgroundColor: "#00FF00", //TODO remove this
    borderRadius: 4,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  buttonText: {
    color: "black",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.2,
  },
});
