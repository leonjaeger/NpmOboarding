# OnBoardingleonn

## Getting Started




### Instalacion


```
npm i onboardingleonn
```
cd 'proyecto'
expo start
```


### Implementacion

```
import MyOnboarding from 'onboardingleonn/src';
```

## Ejemplo

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from'onboardingleonn/src'
import Img from './images'

const onPressSkip=()=>{
  console.log("");

}
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
export default function App() {
  return (
    <Onboarding data={data}  onPressSkip={onPressSkip}></Onboarding>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```



## Version

0.0.7

## Authors

Glenn Julian Castro Duarte

