import { StyleSheet, TextInput, Button ,Text, View} from "react-native";
import { tasks } from "../data/tasks";
import { TaskList } from "../components/TaskList";

export default function TaskListPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de tarefas</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TaskList tasks={tasks} />
      <View style={styles.textRow} >
        <TextInput style={styles.input} placeholder="Digite uma tarefa" />
        <Button title="Adicionar"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30
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
  textRow: {
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
  },
});
