import * as  React from 'react';
import { View, SafeAreaView, Text,TouchableOpacity} from 'react-native';

import styles from './styles'; 


export default function Home({ navigation }) {

const Tarefas = () => navigation.navigate('Tarefas')
const Pomodoro = () => navigation.navigate('Pomodoro')
const Cadastro = () => navigation.navigate('Cadastro')

  return (
 <SafeAreaView>
      <View style={styles.container}>
      <TouchableOpacity style={styles.btnSair} onPress={()=>Cadastro()}>
        <Text style={{color:'black', textAlign: 'center'}}> Sair </Text>
      </TouchableOpacity>
      <Text style={styles.title}>Pomodoro Puc Home </Text>
    </View>
    <View>
     <TouchableOpacity style={styles.btn} >
        <Text style={{color:'white', textAlign: 'center'}} onPress={()=> Pomodoro()} > Acessar Timer </Text>
      </TouchableOpacity>
    </View> 
       <View style={{ marginTop: '20px'}}>
     <TouchableOpacity style={styles.btn} >
        <Text style={{color:'white', textAlign: 'center'}}  onPress={()=> Tarefas()} > Acessar Lista de Tarefas </Text>
      </TouchableOpacity>
    </View> 

    </SafeAreaView>
  );
}
