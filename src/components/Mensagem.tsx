import React, { Component } from 'react';
import { Text } from 'react-native';

class Mensagem extends Component<{ texto: string }> {
  render() {
    return (
      <Text style={{ fontSize: 18, textAlign: 'center', margin: 20 }}>
        {this.props.texto}
      </Text>
    );
  }
}

export default Mensagem;