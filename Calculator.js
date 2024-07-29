import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Botao from "./components/Botao";
import BotaoZero from "./components/BotaoZero";

export default function Calculator() {
  const [numeroUm, setNumeroUm] = useState("");
  const [simbolo, setSimbolo] = useState("");
  const [numeroDois, setNumeroDois] = useState("");

  function adicionarNumero(n) {
    let num = numeroUm + n;
    setNumeroUm(num);
  }

  function conta(sinal) {
    if (numeroUm !== "" && numeroDois !== "") {
      if (simbolo === "/") {
        setNumeroDois(
          (parseFloat(numeroDois) / parseFloat(numeroUm)).toString()
        );
      } else if (simbolo === "*") {
        setNumeroDois(
          (parseFloat(numeroDois) * parseFloat(numeroUm)).toString()
        );
      } else if (simbolo === "-") {
        setNumeroDois(
          (parseFloat(numeroDois) - parseFloat(numeroUm)).toString()
        );
      } else if (simbolo === "+") {
        setNumeroDois(
          (parseFloat(numeroDois) + parseFloat(numeroUm)).toString()
        );
      }
      setSimbolo(sinal);
      setNumeroUm("");
    } else {
      setSimbolo(sinal);
      setNumeroDois(numeroUm);
      setNumeroUm("");
    }
  }

  function resultado() {
    if (numeroUm !== "" && numeroDois !== "" && simbolo !== "=") {
      if (simbolo === "/") {
        setNumeroUm((parseFloat(numeroDois) / parseFloat(numeroUm)).toString());
      } else if (simbolo === "*") {
        setNumeroUm((parseFloat(numeroDois) * parseFloat(numeroUm)).toString());
      } else if (simbolo === "-") {
        setNumeroUm((parseFloat(numeroDois) - parseFloat(numeroUm)).toString());
      } else if (simbolo === "+") {
        setNumeroUm((parseFloat(numeroDois) + parseFloat(numeroUm)).toString());
      }
      setNumeroDois("");
      setSimbolo("");
    }
  }

  function limpar() {
    setNumeroUm("");
  }

  function limparTudo() {
    setNumeroUm("");
    setNumeroDois("");
    setSimbolo("");
  }

  function porcentagem() {
    let p = ((parseFloat(numeroUm) / 100) * parseFloat(numeroDois)).toString();
    setNumeroUm(p);
  }

  function addPonto() {
    if (numeroUm === "") {
      setNumeroUm("0.");
    } else if (!numeroUm.includes(".")) {
      let num = numeroUm + ".";
      setNumeroUm(num);
    }
  }

  return (
    <View style={styles.calculadora}>
      <View style={styles.calculadoraHeader}>
        <Text style={styles.equacao}>{numeroDois}</Text>
        <Text style={styles.solucao}>
          {simbolo}
          {numeroUm}
        </Text>
      </View>
      <View style={styles.botoes}>
        <View style={styles.linhas}>
          <Botao
            color="#a5a5a5"
            background="#616161"
            onPress={() => limpar()}
            text="CE"
          />
          <Botao
            color="#a5a5a5"
            background="#616161"
            onPress={() => limparTudo()}
            text="C"
          />
          <Botao
            color="#a5a5a5"
            background="#616161"
            onPress={() => porcentagem()}
            text="%"
          />
          <Botao
            color="#339dff"
            background="#005db2"
            onPress={() => conta("/")}
            text="/"
          />
        </View>
        <View style={styles.linhas}>
          <Botao
            color="#a5a5a5"
            background="#616161"
            onPress={() => adicionarNumero("7")}
            text="7"
          />
          <Botao
            color="#a5a5a5"
            background="#616161"
            onPress={() => adicionarNumero("8")}
            text="8"
          />
          <Botao
            color="#a5a5a5"
            background="#616161"
            onPress={() => adicionarNumero("9")}
            text="9"
          />
          <Botao
            color="#339dff"
            background="#005db2"
            onPress={() => conta("*")}
            text="X"
          />
        </View>
        <View style={styles.linhas}>
          <Botao
            color="#a5a5a5"
            background="#616161"
            onPress={() => adicionarNumero("4")}
            text="4"
          />
          <Botao
            color="#a5a5a5"
            background="#616161"
            onPress={() => adicionarNumero("5")}
            text="5"
          />
          <Botao
            color="#a5a5a5"
            background="#616161"
            onPress={() => adicionarNumero("6")}
            text="6"
          />
          <Botao
            color="#339dff"
            background="#005db2"
            onPress={() => conta("-")}
            text="-"
          />
        </View>
        <View style={styles.linhas}>
          <Botao
            color="#a5a5a5"
            background="#616161"
            onPress={() => adicionarNumero("1")}
            text="1"
          />
          <Botao
            color="#a5a5a5"
            background="#616161"
            onPress={() => adicionarNumero("2")}
            text="2"
          />
          <Botao
            color="#a5a5a5"
            background="#616161"
            onPress={() => adicionarNumero("3")}
            text="3"
          />
          <Botao
            color="#339dff"
            background="#005db2"
            onPress={() => conta("+")}
            text="+"
          />
        </View>
        <View style={styles.linhas}>
          <BotaoZero
            color="#a5a5a5"
            background="#616161"
            onPress={() => adicionarNumero("0")}
            text="0"
          />
          <Botao
            color="#a5a5a5"
            background="#616161"
            onPress={() => addPonto()}
            text="."
          />
          <Botao
            color="#339dff"
            background="#005db2"
            onPress={() => resultado()}
            text="="
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calculadora: {
    backgroundColor: "#17181a",
    padding: 32,
    borderRadius: 32,
    width: "90%",
  },
  calculadoraHeader: {
    paddingVertical: 32,
    height: 146,
  },
  equacao: {
    color: "#818181",
    fontSize: 24,
    textAlign: "right",
  },
  solucao: {
    color: "#fff",
    fontSize: 48,
    textAlign: "right",
  },
  botoes: {
    width: "100%",
  },
  linhas: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,
  },
});
