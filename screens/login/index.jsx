import React, { Component, useState } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import { styles } from "./styles";

export class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleEmailChange = (text) => {
    this.setState({ email: text });
  };

  handlePasswordChange = (text) => {
    this.setState({ password: text });
  };

  handleSubmit = () => {
    console.log("Email:", this.state.email);
    console.log("Senha:", this.state.name);
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.logo}
            source={require("../../assets/logo.png")}
          />
          <Text>{"\n"}</Text>
        </View>
        <View>
          <Text style={styles.textView}>Seja bem vindo!</Text>
          <Text>{"\n"}</Text>
          <Text style={styles.textView}>Que bom ter você aqui.</Text>
          <Text>{"\n"}</Text>
        </View>
        <View>
          <Text style={styles.textView}>Email:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={this.handleEmailChange}
            value={this.state.email}
          />

          <Text style={styles.textView}>Senha:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={this.handlePasswordChange}
            value={this.state.password}
          />

          <Button title="Entrar" onPress={this.handleSubmit} />
          <Text>{"\n"}</Text>
          <Text style={styles.textView}>Esqueceu sua senha?</Text>
          <Text style={{ color: "white", textDecorationLine: "underline" }}>
            Primeira vez? Crie uma conta
          </Text>
        </View>
      </View>
    );
  }
}
