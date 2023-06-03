import { View } from "react-native";
import { Tarefa } from "./Tarefa";

export const ListaTarefa = (props) => {
  const { tarefas, setTarefas } = props;
  return (
    <View>
      {tarefas.map((tarefa) => {
        return (
          <Tarefa
            id={tarefa.id}
            nome={tarefa.nome}
            ativa={tarefa.ativa}
            key={tarefa.id}
            setTarefas={setTarefas}
          />
        );
      })}
    </View>
  );
};