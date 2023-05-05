import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles'; 

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const Cadastro = () => {
    console.log(`Nome: ${nome}, Email: ${email}, Senha: ${senha}`);
  };

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



    </View>
  );
}

