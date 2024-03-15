import React, {useState} from 'react'
import {Text, Button, View} from 'react-native'
import estilo from './estilo'

export default comp => {
  const [numero, setNumero] = useState(comp.inicial)

  const inc = () => setNumero(numero + 1)
  const dec = () => setNumero(numero - 1)

  return(
    <>
      <Text style={estilo.FontGrande}>{numero}</Text>
      <View style={estilo.ButtonView} >
        <Button title=' + ' onPress={inc} color={'#0284c7'} />
        <Button title=' - ' onPress={dec} color={'#dc2626'} />
      </View>
    </>
  )
}