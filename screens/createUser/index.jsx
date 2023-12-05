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
import axios from "axios";

export class AccountCreateForm extends Component {
  state = {
    nome: "",
    email: "",
    senha: "",
    confirmSenha: "",
  };

  constructor(props) {
    super(props);
  }

  handleEmailChange = (text) => {
    this.setState({ email: text });
  };

  handlePasswordChange = (text) => {
    this.setState({ senha: text });
  };

  handleNameChange = (text) => {
    this.setState({ nome: text });
  };

  handleConfirmPasswordChange = (text) => {
    this.setState({ confirmSenha: text });
  };

  handleRegister = async () => {
    const { email, senha, nome, confirmSenha } = this.state;

    // Verifique se todos os campos foram fornecidos
    if (!email || !senha || !nome || !confirmSenha) {
      console.error("Todos os campos são necessários");
      return;
    }

    // Verifique se a senha e a confirmação de senha correspondem
    if (senha !== confirmSenha) {
      console.error("A senha e a confirmação de senha não correspondem");
      return;
    }

    try {
      const response = await axios.post("http://10.0.2.2:3001/register", {
        email,
        senha,
        nome,
      });

      console.log(response.data);
      if (response.data.message === "Registro bem-sucedido") {
        this.props.navigation.navigate("HomeScreen");
      } else {
        console.error("Erro ao registrar!");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.error("Erro ao registrar?");
      } else {
        console.error(error);
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} source={Background}>
          <View>
            <Image style={styles.logo} source={Logo} />
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
                value={this.state.nome}
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
                value={this.state.senha}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.textView}>Confirmar Senha</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.textInput}
                onChangeText={this.handleConfirmPasswordChange}
                value={this.state.confirmSenha}
              />
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={this.handleRegister}
            >
              <Text style={styles.buttonText}>CRIAR CONTA</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
