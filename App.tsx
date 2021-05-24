import React from 'react'
import {StatusBar} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Navigation from './src/navigation'

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#1C86EE" />
      <Navigation />
    </SafeAreaProvider>
  )
}

export default App
