import React, { Component, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
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
          {/* <Image source={require("../../assets/logo.png")} /> */}
          <Text>{"\n"}</Text>
        </View>
        <View>
          <Text>Seja bem vindo!</Text>
          <Text>{"\n"}</Text>
          <Text>Que bom ter você aqui.</Text>
          <Text>{"\n"}</Text>
        </View>
        <View>
          <Text>Email:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={this.handleEmailChange}
            value={this.state.email}
          />

          <Text>Senha:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={this.handlePasswordChange}
            value={this.state.password}
          />

          <Button title="Criar" onPress={this.handleSubmit} />
          <Text>{"\n"}</Text>
          <Text>Esqueceu sua senha?</Text>
          <Text>{"\n"}</Text>
          <Text style={{ textDecorationLine: "underline" }}>
            Primeira vez? Crie uma conta
          </Text>
        </View>
      </View>
    );
  }
}
