import AsyncStorage from "@react-native-async-storage/async-storage";

export const tarefasAtuais = async () => {
  try {
    const tarefas = await AsyncStorage.getItem("tarefas");
    if (!tarefas) {
    return []
    }
    return JSON.parse(tarefas);
  } catch (e) {
    console.log(e);
  }
};

export const atualizarTarefas = async (tarefas) => {
  const tarefasJson = JSON.stringify(tarefas);
  await AsyncStorage.setItem("tarefas", tarefasJson);
};

export const adicionarTarefa = async (message) => {
  const tarefas = await tarefasAtuais();
  const lastId = tarefas[tarefas.length - 1]?.id || 0;
  const id = lastId + 1;
  const novaTarefa = {
    id,
    nome: message,
    userId: 1,
    ativa: true,
  };
  tarefas.push(novaTarefa);
  const tarefasJson = JSON.stringify(tarefas);
  await AsyncStorage.setItem("tarefas", tarefasJson);
  return tarefas;
};

export const atualizarEstadoAtiva = async (tarefaId) => {
  const tarefas = await tarefasAtuais();
  const tarefa = tarefas.find((tarefa) => tarefa.id === tarefaId);
  tarefa.ativa = !tarefa.ativa;
  atualizarTarefas(tarefas);
};

export const deletarTarefa = async (tarefaId) => {
  const tarefas = await tarefasAtuais();
  const newtarefas = tarefas.filter((tarefa) => tarefa.id !== tarefaId);
  console.log(newtarefas)
  return newtarefas;
};