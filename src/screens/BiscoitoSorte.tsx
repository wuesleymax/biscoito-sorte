import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "../../styles/style";
import Mensagem from "../components/Mensagem";

export default function BiscoitoSorte() {

  const [aberto, setAberto] = useState(false);
  const [frase, setFrase] = useState("");

  const frases = [
    "A sorte favorece os corajosos.",
    "Grandes coisas estão por vir.",
    "Hoje será um dia especial.",
    "Você encontrará algo inesperado.",
    "A felicidade está nas pequenas coisas.",
    "Confie no seu potencial.",
    "Algo incrível está prestes a acontecer."
  ];

  function quebrarBiscoito() {
    const indice = Math.floor(Math.random() * frases.length);
    setFrase(frases[indice]);
    setAberto(true);
  }

  function resetar() {
    setAberto(false);
    setFrase("");
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Biscoito da Sorte</Text>

      <Image
        source={
          aberto
            ? require("../../assets/biscoito_aberto.png")
            : require("../../assets/biscoito_fechado.png")
        }
        style={styles.imagem}
      />

      {frase !== "" && <Mensagem texto={frase} />}

      <Pressable style={styles.botao} onPress={quebrarBiscoito}>
        <Text style={styles.textoBotao}>Quebrar</Text>
      </Pressable>

      <Pressable style={styles.botaoReset} onPress={resetar}>
        <Text style={styles.textoBotao}>Resetar</Text>
      </Pressable>

    </View>
  );
}