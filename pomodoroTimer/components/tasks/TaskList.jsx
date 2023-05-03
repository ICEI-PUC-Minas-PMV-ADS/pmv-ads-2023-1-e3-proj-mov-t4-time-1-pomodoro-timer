import { View } from "react-native";
import { Task } from "./Task";

export const TaskList = (props) => {
  const { tasks, setTasks } = props;
  return (
    <View>
      {tasks.map((task) => {
        return (
          <Task
            id={task.id}
            nome={task.nome}
            ativa={task.ativa}
            key={task.id}
            setTasks={setTasks}
          />
        );
      })}
    </View>
  );
};
