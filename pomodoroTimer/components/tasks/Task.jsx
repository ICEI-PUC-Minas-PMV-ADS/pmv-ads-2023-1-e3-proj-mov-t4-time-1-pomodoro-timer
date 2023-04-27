import { StyleSheet,Text, View } from "react-native";
import Checkbox from "./Checkbox";

export const Task = (props) => {
  const { id, nome } = props;
  return (
    <View style={styles.container}>
      <Checkbox/>
      <Text style={styles.text}>{nome}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  container: {
    flex: 0.1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
