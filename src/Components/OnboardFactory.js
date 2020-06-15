import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Description from './Description';
import ButtonFooter from './ButtonFooter';


const OnboardFactory = ({
  Img,
  titulo,
  descripcion,
  funcionBoton1,
  funcionBoton2,
  color,
  botonsig,
  botonskip,
  colorFondo,
  iconoNext,
  iconoPrev

}) => {
  return (
    <View style={[styles.container, { backgroundColor: colorFondo }]}>
      <StatusBar backgroundColor={colorFondo} barStyle="light-content" />

      <Description
        Img={Img}
        titulo={titulo}
        descripcion={descripcion}
        color={color}
      />
      <ButtonFooter
        botonsig={botonsig}
        botonskip={botonskip}
        pressPrev={funcionBoton1}
        presNext={funcionBoton2}
        colorFondoNext={color}
        colorPrev={color}
        colorNext={colorFondo}
        iconoPrev={iconoPrev}
        iconoNext={iconoNext}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default OnboardFactory;