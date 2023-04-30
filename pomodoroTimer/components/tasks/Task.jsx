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
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-start",
    marginBottom: 15, 
  },
});
