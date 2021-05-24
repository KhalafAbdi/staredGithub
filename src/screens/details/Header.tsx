import * as React from 'react'
import {StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native'
import MaterialIcon from '../../components/icons/MaterialIcon'
import {observer} from 'mobx-react-lite'

import {FavoritesStoreImpl} from '../../stores/favorite'
import {Repository} from '../../types'

import titleCase from '../../util/titleCase'

interface HeaderProps {
  item: Repository
  store: FavoritesStoreImpl
}

const DetailsHeader: React.FC<HeaderProps> = ({item, store}) => {
  const handlePress = () => {
    Linking.openURL(item.html_url)
  }

  const isSaved = store.favorites.find(element => element.id == item.id)

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.headerTitle}>{titleCase(item.name)}</Text>
        <Text>
          {item.owner.login}/{item.name}
        </Text>
      </TouchableOpacity>
      {isSaved ? (
        <MaterialIcon
          iconName="favorite"
          color="#76b6f4"
          size={25}
          onPress={() => store.remove(item.id)}
        />
      ) : (
        <MaterialIcon
          iconName="favorite-border"
          color="#76b6f4"
          size={25}
          onPress={() => store.add(item)}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
})

export default observer(DetailsHeader)
