import React, { Component, useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export class AccountCreateForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleNameChange = (text) => {
    this.setState({ name: text });
  };

  handleEmailChange = (text) => {
    this.setState({ email: text });
  };

  handlePasswordChange = (text) => {
    this.setState({ password: text });
  };
  handleConfirmPasswordChange = (text) => {
    this.setState({ confirmPassword: text });
  };

  handleSubmit = () => {
    console.log("Nome:", this.state.name);
    console.log("Email:", this.state.email);
    console.log("Senha:", this.state.password);
    console.log("Confirmar Senha:", this.state.confirmPassword);
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.logo}
            source={require("../../assets/logo.png")}
          />
        </View>
        <View>
          <Text style={styles.brandTitle}>Crie sua conta</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.inputContainer}>
            <Text style={styles.textView}>Nome</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={this.handleNameChange}
              value={this.state.name}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.textView}>Email</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={this.handleEmailChange}
              value={this.state.email}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.textView}>Senha</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.textInput}
              onChangeText={this.handlePasswordChange}
              value={this.state.password}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.textView}>Confirmar Senha</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.textInput}
              onChangeText={this.handleConfirmPasswordChange}
              value={this.state.confirmPassword}
            />
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={this.handleSubmit}
          >
            <Text style={styles.buttonText}>CRIAR CONTA</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
