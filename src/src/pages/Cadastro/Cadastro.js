import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles'; 
import { cadastrarUsuario } from '../../api/api'

const usuario = {
  nome: '',
  email: '',
  senha: ''
};

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const Cadastro = () => {
    if (nome && email && senha) {
      cadastrarUsuario(nome, email, senha).then(status => {
        if (status === 200) {
          navigation.navigate('Login')
        } else {
          alert('Erro')
        }
      })
      usuario.nome = nome;
      usuario.email = email;
      usuario.senha = senha;
      navigation.navigate('Login');
    }
  };

  const FazerLogin = () => navigation.navigate('Login')

  return (
    <View style={styles.container}>
      <Image style={{width:100, height: 100}} source={require('../../assets/pomodoro.png')}/>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput placeholder= "Nome" style={styles.input} onChangeText={text=>setNome(text)}/>
      <TextInput placeholder= "E-mail" style={styles.input} onChangeText={text=>setEmail(text)} />
      <TextInput secureTextEntry={true} placeholder= "Senha" style={styles.input} onChangeText={text=>setSenha(text)} />

      <TouchableOpacity style={styles.buttonCadastro} onPress={()=>Cadastro()}>
        <Text style={{color:'white', textAlign: 'center'}}> Cadastrar </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonLogin} onPress={FazerLogin}>
        <Text style={{ color: 'gray', textAlign: 'center', marginTop: 10 }}>
          Já tem uma conta? Faça login aqui
        </Text>
      </TouchableOpacity>
    </View>
  );
}

