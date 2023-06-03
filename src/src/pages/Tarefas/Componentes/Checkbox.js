import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { atualizarEstadoAtiva } from "../../../utils/tarefaController";

const Checkbox = (props) => {
  const { previousState, taskId } = props;
  const [ati, setAtiva] = useState(!previousState);

  const handleToggle = () => {
    atualizarEstadoAtiva(taskId);
    setAtiva(!ati);
  };

  return (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={handleToggle}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.checkbox,
          ati ? styles.checkboxChecked : styles.checkboxUnchecked,
        ]}
      >
        {ati && <Text style={styles.checkmark}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "green",
    borderColor: "green",
  },
  checkboxUnchecked: {
    backgroundColor: "transparent",
  },
  checkmark: {
    color: "white",
    fontSize: 16,
  },
});

export default Checkbox;