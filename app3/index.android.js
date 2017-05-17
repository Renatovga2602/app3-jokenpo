import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';



class app3 extends Component {

  constructor(props) {
    super(props);
    this.state = { escolhaUsuario: '', escolhaCompuador: '' }

  }
  jokenpo(escolhaUsuario) {

    //gerar num aleatório

    const numAleatorio = Math.floor(Math.random() * 3);


    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaCompuador: numAleatorio
    });



  }



  render() {
    return (
      <View>
        <Text>Escolha do Computador: {this.state.escolhaCompuador}</Text>
        <Text>Escolha do Usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado</Text>
        <Button title='pedra' onPress={() => { this.jokenpo('pedra') }} />
        <Button title='papel' onPress={() => { this.jokenpo('papel') }} />
        <Button title='tesoura' onPress={() => { this.jokenpo('tesoura') }} />

      </View>
    )
  }
}

AppRegistry.registerComponent('app3', () => app3);
