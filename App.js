import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function App() {
  const [img, setImg] = useState(require('./src/image/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'Siga os bons e aprenda com eles',
    'O bom-senso vale mais do que muito conhecimento',
    'O riso é a menor distancia entre duas pessoas',
    'deixe de lado  as preocupações e seja feliz',
    'Realize o obvio, pense no improvavel e conquiste o impossivel',
    'Acredite em milagres, mas não dependa deles',
    'A maior barreira para o sucesso é o medo do fracasso',
  ];

  function quebraBis() {
    let numeroBis = Math.floor(Math.random() * frases.length);
    setTextoFrase(' " ' + frases[numeroBis] + ' " ');
    setImg(require('./src/image/biscoitoAberto.png'));
  }

  function reiniciar(){
    setImg(require('./src/image/biscoito.png'));
    setTextoFrase('');
  }
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image} />

      <Text style={styles.text}>
        {textoFrase}
        {/* " Esta é minha primeira frase do biscoito! " */}
      </Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBis}>
        <View style={styles.btnArea}>
          <Text style={styles.texto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, {marginTop: 15, borderColor: '#121212'}]}
        onPress={reiniciar}>
        <View style={styles.btnArea}>
          <Text style={[styles.texto, {color: '#121212'}]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 230,
    height: 230,
  },
  text: {
    fontSize: 25,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});
