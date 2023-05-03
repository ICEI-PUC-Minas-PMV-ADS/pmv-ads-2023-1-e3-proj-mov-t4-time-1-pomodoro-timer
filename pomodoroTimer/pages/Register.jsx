import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function CadastroScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const Cadastro = () => {
    console.log(`Nome: ${nome}, Email: ${email}, Senha: ${senha}`);
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 100, height: 100 }}
        source={require("./assets/pomodoro.png")}
      />
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput
        placeholder="Nome"
        style={styles.input}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Senha"
        style={styles.input}
        onChangeText={(text) => setSenha(text)}
      />

      <TouchableOpacity
        style={styles.buttonCadastro}
        onPress={() => Cadastro()}
      >
        <Text style={{ color: "white", textAlign: "center" }}> Cadastrar </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    paddingTop: 10,
  },
  input: {
    height: 50,
    width: "100%",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  buttonCadastro: {
    width: "100%",
    height: 40,
    backgroundColor: "#000000",
    borderRadius: 10,
    justifyContent: "center",
  },
});
