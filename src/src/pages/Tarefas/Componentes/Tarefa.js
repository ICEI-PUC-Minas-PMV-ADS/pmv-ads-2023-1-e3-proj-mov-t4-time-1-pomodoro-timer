import { StyleSheet, Text, View } from "react-native";
import Checkbox from "./Checkbox";
import { BinSvg } from "./BinSvg";

export const Tarefa = (props) => {
  const { id, nome, ativa, setTarefas } = props;
  return (
    <View style={styles.container}>
      <Checkbox previousState={ativa} tarefaId={id} />
      <Text style={styles.text}>{nome}</Text>
      <BinSvg tarefaId={id} setTarefas={setTarefas} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  container: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "flex-start",
    marginBottom: 15,
    marginRight: 30,
  },
});