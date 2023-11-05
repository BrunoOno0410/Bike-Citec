import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#04062C",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 75,
    height: 75,
    marginBottom: 20,
  },
  textView: {
    color: "white",
  },
  textInput: {
    color: "white",
    borderRadius: 25,
    borderColor: "white",
    borderWidth: 1,
    height: 30,
    padding: 10,
    marginLeft: 20,
    marginBottom: 10,
  },
  forgotButton: {
    height: 30,
    marginBottom: 30,
  },
  loginButton: {
    width: "70%",
    backgroundColor: "#1c313a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  createAccountButton: {
    width: "50%",
  },
  loginText: {
    color: "white",
  },
});
