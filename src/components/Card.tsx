import * as React from 'react'
import {StyleSheet, View} from 'react-native'

interface CardProps {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({children}) => {
  return <View style={styles.card}>{children}</View>
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
  },
})

export default Card
