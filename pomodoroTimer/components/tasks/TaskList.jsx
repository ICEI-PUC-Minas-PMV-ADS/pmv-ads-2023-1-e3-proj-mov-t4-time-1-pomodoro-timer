import { StyleSheet, Text, View  } from "react-native";
import { Task } from "./Task";

export const TaskList = (tasks) => {
  const activeTasks = tasks.tasks.filter((task) => task.ativa);
  return (
    <View>
      {activeTasks.map((task) => {
        return <Task id={task.id} nome={task.nome} key={task.id}/>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      alignSelf: 'center',
    },
  });
