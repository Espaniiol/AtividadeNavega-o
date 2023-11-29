import React from "react";
import { Text, View } from "react-native";
import ButtonGeneric from "../../components/Button/Index";
import { styles } from "./styles";

const Initial = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>UNIPAR</Text>
      </View>
      <ButtonGeneric
        textButton="INICIAR"
        backgroundColor="#01633D"
        destinyScreen="registerName"
      />
    </View>
  );
}

export default Initial;
