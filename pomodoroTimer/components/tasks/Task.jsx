import { StyleSheet, Text, View } from "react-native";
import Checkbox from "./Checkbox";
import { BinSvg } from "./BinSvg";

export const Task = (props) => {
  const { id, nome, ativa, setTasks } = props;
  return (
    <View style={styles.container}>
      <Checkbox previousState={ativa} taskId={id} />
      <Text style={styles.text}>{nome}</Text>
      <BinSvg taskId={id} setTasks={setTasks} />
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
