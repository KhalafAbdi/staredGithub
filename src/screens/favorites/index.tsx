import * as React from 'react'
import {StyleSheet, View} from 'react-native'
import List from './ListHandler'
import {FavoritesStore} from '../../stores/favorite'
import Header from '../../components/Header'

const Favorites = () => {
  return (
    <View style={styles.container}>
      <Header title="Favorites" />
      <List store={FavoritesStore} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Favorites
