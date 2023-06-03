import { StyleSheet, TextInput, Button, Text, View, TouchableOpacity } from "react-native";
import defaultTasks from "../../data/tasks.json";
import { ListaTarefa } from "./Componentes/ListaTarefa"
import React from 'react';

import {
  tarefasAtuais,
  atualizarTarefas,
  adicionarTarefa,
} from "../../utils/tarefaController";
import { useEffect, useState } from "react";

export default function Tarefas({navigation}) {
  let [tarefas, setTarefas] = useState([]);
  let [novaTarefa, setNovaTarefa] = useState("");
  useEffect(() => {
    const fetchTarefas = async () => {
      try {
        const fetchedTarefas = await tarefasAtuais();
        const initialTarefas = fetchedTarefas == [] ? defaultTasks : fetchedTarefas;
        console.log("fetched", initialTarefas);
        setTarefas(initialTarefas);
      } catch (e) {
        console.log(e);
      }
    };
    fetchTarefas();
  }, []);
  return (
    
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnVoltar}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btnText}>Voltar</Text>

      </TouchableOpacity>
      <Text style={styles.title}>Lista de tarefas</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ListaTarefa setTarefas={setTarefas} tarefas={tarefas} />
      <View style={styles.submitRow}>
        <TextInput
          onChange={(event) => {
            let text = event.nativeEvent.text;
            setNovaTarefa(text);
          }}
          onSubmitEditing={(event) => {
            adicionarTarefa(event.nativeEvent.text).then((updatedTasks) => {
              setTarefas(updatedTasks);
              atualizarTarefas(updatedTasks);
            });
          }}
          style={styles.input}
          placeholder="Digite uma tarefa"
        />
        <Button
          onPress={() => {
            adicionarTarefa(novaTarefa).then((updatedTasks) => {
              setTarefas(updatedTasks);
              atualizarTarefas(updatedTasks);
            });
          }}
          title="Adicionar"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "15%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  submitRow: {
    flexDirection: "row",
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
    fontSize: 20,
    width: "60%",
  },
  btnVoltar: {
    width:'100%',
    height: 20,
    position: 'absolute',
    top: 10,
    left: 10
  }
});