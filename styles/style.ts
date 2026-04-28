import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },

  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

  botao: {
    backgroundColor: "#f39c12",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },

  botaoReset: {
    backgroundColor: "#888",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },

  textoBotao: {
    color: "#fff",
  },
});