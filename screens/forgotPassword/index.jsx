import React, { Component, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/logo.png";
import Background from "../../assets/background.png";

export class AccountPasswordChangeForm extends Component {
  state = {
    email: "",
    newPassword: "",
    confirmPassword: "",
  };

  handleEmailChange = (text) => {
    this.setState({ email: text });
  };

  handleNewPasswordChange = (text) => {
    this.setState({ newPassword: text });
  };

  handleConfirmPasswordChange = (text) => {
    this.setState({ confirmPassword: text });
  };

  handleSubmit = () => {
    console.log("Email:", this.state.email);
    console.log("Senha nova:", this.state.newPassword);
    console.log("Confirmar Senha:", this.state.confirmPassword);
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} source={Background}>
          <View>
            <Image style={styles.logo} source={Logo} />
          </View>
          <View>
            <Text style={styles.brandTitle}>Esqueceu sua senha?</Text>
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
              <Text style={styles.textView}>Nova senha</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.textInput}
                onChangeText={this.handleNewPasswordChange}
                value={this.state.newPassword}
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
              <Text style={styles.buttonText}>RECUPERAR SENHA</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
