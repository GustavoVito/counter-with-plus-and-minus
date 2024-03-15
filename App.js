import React from 'react'
import { View, StyleSheet } from 'react-native';
import Contador from './src/Contador'

export default () => (
  <View style={style.App}>
    <Contador inicial={500} />
  </View>
)

  const style = StyleSheet.create({
    App: {
      backgroundColor: '#262626',
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
    
  })
