
import { YellowBox } from 'react-native'
import Onboarding from './src';
import Img from './images'

import React, {Component} from 'react';

YellowBox.ignoreWarnings(["Each child in a list"]);


const onPressSkip = () => {
  console.log("Skip");
};
const data = [
  {
    Img:Img.IMG,
    titulo: 'Hito 4',
    descripcion: 'Glenn Julian Castro Duarte',    
    colortexto: '#fff',
    colorFondo: '#F44611',
    textoBotonPrev: 'Inicio',
    textoBotonNext: 'Sig.',
    

  },
  {
    Img:Img.IMG2,
    titulo: 'Onboarding',
    descripcion: 'Unifranz 7mo semestre',    
    colortexto: '#F44611',
    colorFondo: '#fff',
    textoBotonPrev: 'Ant.',
    textoBotonNext: 'Sig.',
    

  },
  {
    Img:Img.IMG3,
    titulo: 'PDM',
    descripcion: 'ING: William Barra',    
    colortexto: '#fff',
    colorFondo: '#F44611',
    textoBotonPrev: 'Ant.',
    textoBotonNext: 'Fin',
    
  },

];
export default class App extends Component {
  render() {
    return (
      <Onboarding data={data} onPressSkip={onPressSkip} />
    );
  }
}
