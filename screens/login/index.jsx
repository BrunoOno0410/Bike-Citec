import React, { Component, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/logo.png";

export class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  constructor(props) {
    super(props);
  }

  handleEmailChange = (text) => {
    this.setState({ email: text });
  };

  handlePasswordChange = (text) => {
    this.setState({ password: text });
  };

  handleSubmit = () => {
    console.log("Email:", this.state.email);
    console.log("Senha:", this.state.password);
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.logo} source={Logo} />
        </View>
        <View>
          <Text style={styles.brandTitle}>
            Seja bem vindo! {"\n"} Que bom ter você aqui
          </Text>
        </View>
        <View style={styles.box}>
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

          <TouchableOpacity style={styles.forgotPassword}>
            Esqueceu sua senha?
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={this.handleSubmit}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ color: "white", textDecorationLine: "underline" }}
            onPress={() => this.props.navigation.navigate("CreateUser")}
          >
            <Text style={styles.textView}>Primeira vez? Crie uma conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
