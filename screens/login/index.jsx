import React, { Component } from "react";
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
        <ImageBackground style={styles.backgroundImage} source={Background}>
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
              <Text
                style={styles.textView}
                onPress={() => this.props.navigation.navigate("ForgotPassword")}
              >
                Esqueceu sua senha?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginButton}
              //onPress={this.handleSubmit}
              //TODO VALIDAR LOGIN
              onPress={() => this.props.navigation.navigate("HomeScreen")}
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
        </ImageBackground>
      </View>
    );
  }
}
