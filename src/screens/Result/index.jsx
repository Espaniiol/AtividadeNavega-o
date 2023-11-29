import React from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import ButtonGeneric from "../../components/Button/Index";
import { styles } from "./styles";

const Result = () => {
  const route = useRoute();
  const { nome, sobrenome, cpf, rg } = route.params;

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Olá, {nome} {sobrenome}</Text>
        <Text style={styles.title2}>portador do documento</Text>
      </View>

      <View style={styles.containerResults}>
        <Text style={styles.identifier}>CPF</Text>
        <Text style={styles.textResult}>{cpf}</Text>

        <Text style={styles.identifier}>RG</Text>
        <Text style={styles.textResult}>{rg}</Text>
      </View>

      <View style={styles.Buttons}>
        <ButtonGeneric
          textButton="Voltar"
          backgroundColor="#860929"
          destinyScreen="registerDocuments"
          params={{ nome: '', sobrenome: '' }}
        />
        <ButtonGeneric
          textButton="Finalizar"
          backgroundColor="#01633D"
          destinyScreen="initial"
        />
      </View>
      
    </View>
  );
};

export default Result;
