import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';



class app3 extends Component {

  constructor(props) {
    super(props);
    this.state = { escolhaUsuario: '', escolhaCompuador: '', resultado: '' }

  }
  jokenpo(escolhaUsuario) {

    //gerar num aleatório

    var numAleatorio = Math.floor(Math.random() * 3);
    var escolhaCompuador = '';

    switch (numAleatorio) {
      case 0: escolhaCompuador = 'pedra';
        break;
      case 1: escolhaCompuador = 'papel';
        break;
      case 2: escolhaCompuador = 'tesoura';
        break;
    }

    var resultado = '';//escolha para pedra 
    if (escolhaCompuador == 'pedra') {
      if (escolhaUsuario == 'pedra') {
        resultado = 'Empate';
      }
      if (escolhaUsuario == 'papel') {
        resultado = 'Usuário ganhou';
      }
      if (escolhaUsuario == 'tesoura') {
        resultado = 'Computador ganhou'
      }
    }//escolha para papel
    if (escolhaCompuador == 'papel') {
      if (escolhaUsuario == 'papel') {
        resultado = 'Empate';
      }
      if (escolhaUsuario == 'tesoura') {
        resultado = 'Usuário ganhou';
      }
      if (escolhaUsuario == 'pedra') {
        resultado = 'Computador ganhou';
      }
    }//escolha para tesoura
    if (escolhaCompuador == 'tesoura') {
      if (escolhaUsuario == 'tesoura') {
        resultado = 'Empate';
      }
      if (escolhaUsuario == 'pedra') {
        resultado = 'Usuário ganhou';
      }
      if (escolhaUsuario == 'papel') {
        resultado = 'Computador ganhou';
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaCompuador: escolhaCompuador,
      resultado: resultado
    });
  }



  render() {
    return (
      <View>
        <Topo></Topo>

        <View style={styles.painelAcoes}>

          <View style={styles.btnEscolha}>
            <Button title='pedra' onPress={() => { this.jokenpo('pedra') }} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title='papel' onPress={() => { this.jokenpo('papel') }} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title='tesoura' onPress={() => { this.jokenpo('tesoura') }} />
          </View>

        </View>

        <View style={styles.palco}>

          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Text>Escolha do Computador: {this.state.escolhaCompuador}</Text>
          <Text>Escolha do Usuário: {this.state.escolhaUsuario}</Text>

        </View>


      </View>
    )
  }
}

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require('./imgs/jokenpo.png')}
        // style={{ flex: 1, resizeMode: 'stretch' }}
        />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  btnEscolha: {
    width: 90,

  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,

  },
  palco: {
    alignItems: 'center',
    marginTop: 10

  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});

AppRegistry.registerComponent('app3', () => app3);
