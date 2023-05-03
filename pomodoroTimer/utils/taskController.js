import AsyncStorage from "@react-native-async-storage/async-storage";

export const getCurrentTasks = async () => {
  try {
    const tasks = await AsyncStorage.getItem("currentTasks");
    if (!tasks) {
    return []
    }
    return JSON.parse(tasks);
  } catch (e) {
    console.log(e);
  }
};

export const updateCurrentTasks = async (tasks) => {
  const parsedTasks = JSON.stringify(tasks);
  await AsyncStorage.setItem("currentTasks", parsedTasks);
};

export const addTask = async (message) => {
  const tasks = await getCurrentTasks();
  const lastId = tasks[tasks.length - 1]?.id || 0;
  const id = lastId + 1;
  const newTask = {
    id,
    nome: message,
    userId: 1,
    ativa: true,
  };
  tasks.push(newTask);
  const parsedTasks = JSON.stringify(tasks);
  await AsyncStorage.setItem("currentTasks", parsedTasks);
  return tasks;
};

export const updateDoneState = async (taskId) => {
  const tasks = await getCurrentTasks();
  const task = tasks.find((task) => task.id === taskId);
  task.ativa = !task.ativa;
  updateCurrentTasks(tasks);
};

export const deleteTask = async (taskId) => {
  const tasks = await getCurrentTasks();
  newTasks = tasks.filter((task) => task.id !== taskId);
  updateCurrentTasks(newTasks);
  return newTasks;
};
