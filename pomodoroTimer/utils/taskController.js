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

export const addTask = (message) => {
  const lastId = tasks[tasks.length - 1];
  const id = lastId + 1;
  const newTask = {
    id,
    message: message,
    userId: 1,
    done: false,
  };
  tasks.push(newTask);
};

export const markTaskAsDone = (taskId) => {};

export const deleteTask = (taskId) => {};
