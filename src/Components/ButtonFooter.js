import React from 'react';
import { StyleSheet,View,} from 'react-native';
import ButtonSkip from './Button';
import ButtonNext from './Button';
const ButtonsFooter = ({  botonsig,  botonskip, pressPrev, presNext, colorPrev, colorFondoPrev, colorNext,  colorFondoNext }) => {
   
  return (
    <View style={styles.container}>
      <ButtonSkip
        titleButton={botonsig}
        onPress={pressPrev}
        color={colorPrev}
        colorFondo={colorFondoPrev}
      />
      <ButtonNext
        titleButton={botonskip}
        onPress={presNext}
        color={colorNext}
        colorFondo={colorFondoNext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 500,
    paddingHorizontal: 5,
    paddingVertical: 30,
    alignItems: 'flex-end',
  },
});

export default ButtonsFooter;