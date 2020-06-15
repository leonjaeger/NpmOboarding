import React from 'react';
import { StyleSheet, View, Text, Image,} from 'react-native';

const Description = ({ Img, titulo, descripcion, color}) => {
  return (
    <View style={styles.container}>
      <Image source={Img} style={styles.image} />
      <View style={styles.text}>
        <Text
          style={[styles.titulo, { color: color }]}
        >
          {titulo}
        </Text>
        <Text
          style={[styles.descripcion, { color: color }]}
        >
          { descripcion}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '70%'
  },
  image: {
    width: 350,
    height: 300,
    resizeMode: 'stretch',
    alignItems: 'stretch',
  },
  text: {
    paddingVertical:'20%',
    paddingHorizontal: '5%'
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight:'bold'
  },
  descripcion: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Description;