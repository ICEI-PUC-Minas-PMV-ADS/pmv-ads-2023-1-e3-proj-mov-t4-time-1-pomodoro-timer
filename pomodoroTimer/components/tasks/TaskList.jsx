import { View  } from "react-native";
import { Task } from "./Task";

export const TaskList = (tasks) => {
  return (
    <View>
      {tasks.tasks.map((task) => {
        return <Task id={task.id} nome={task.nome} ativa={task.ativa} key={task.id}/>;
      })}
    </View>
  );
};
