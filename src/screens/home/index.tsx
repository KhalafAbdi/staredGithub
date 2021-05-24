import * as React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import {RepositoryStore} from '../../stores/repository'
import Header from '../../components/Header'
import List from './ListHandler'

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Repositories" />
      <List store={RepositoryStore} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Home
