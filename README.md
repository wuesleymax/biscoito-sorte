# 🍪 Biscoito da Sorte

Aplicativo mobile desenvolvido em **React Native com Expo** que simula um biscoito da sorte.
Ao clicar no botão, o usuário "quebra" o biscoito e recebe uma frase aleatória motivacional.

---

## 📱 Funcionalidades

* Exibição de biscoito fechado
* Abertura do biscoito ao clicar em **Quebrar**
* Exibição de frase aleatória
* Troca de imagem (fechado → aberto)
* Botão para resetar o estado
---

## 🚀 Tecnologias utilizadas

* React Native
* Expo
* TypeScript
* JavaScript

---



## ⚙️ Pré-requisitos

Antes de executar o projeto, instale:

* Node.js (versão 18 ou superior)
* npm ou yarn
* Expo CLI

Instalar Expo CLI:

```bash
npm install -g expo-cli
```

---

## 📥 Instalação

Clone o repositório:

```bash
git clone https://github.com/wuesleymax/biscoito-sorte.git
```

Acesse a pasta do projeto:

```bash
cd biscoito-sorte
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Como executar o projeto

Inicie o servidor do Expo:

```bash
npx expo start
```

Para rodar seu Expo na web:

```bash
npx expo install react-dom react-native-web @expo/webpack-config
```

---

##  Como funciona

* O estado `aberto` controla a imagem do biscoito
* O estado `frase` armazena a mensagem sorteada
* Um array contém várias frases motivacionais
* Ao clicar em **Quebrar**, uma frase aleatória é escolhida
* O botão **Resetar** limpa o estado e volta ao início

---

