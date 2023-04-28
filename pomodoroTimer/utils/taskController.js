import { tasks } from "../data/tasks"

export const addTask = (message) => {
    const lastId = tasks[tasks.length - 1];
    const id = lastId + 1;
    const newTask = {
        id: lastId,
        message: message,
        userId: 1,
        done: false
    }
    tasks.push(newTask);
}

export const markTaskAsDone = (taskId) => {

}

export const deleteTask = (taskId) => {

}
