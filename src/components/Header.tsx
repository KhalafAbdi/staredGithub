import * as React from 'react'
import {StyleSheet, Text, View} from 'react-native'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#1C86EE',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginBottom: 10,
    marginStart: 15,
  },
})

export default Header
