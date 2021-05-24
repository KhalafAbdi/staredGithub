import * as React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {observer} from 'mobx-react-lite'
import {useNavigation} from '@react-navigation/native'
import MaterialIcon from './icons/MaterialIcon'
import {Repository} from '../types'
import {FavoritesStoreImpl} from '../stores/favorite'

interface ListItemProps {
  item: Repository
  store: FavoritesStoreImpl
}

const ListItem: React.FC<ListItemProps> = observer(({store, item}) => {
  const navigation = useNavigation()

  const isSaved = store.favorites.find(element => element.id == item.id)

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Details', item)}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text>Watchers: {item.watchers}</Text>
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
})

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 6,
  },
  item: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    marginVertical: 5,
  },
})

export default ListItem
