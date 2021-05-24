import * as React from 'react'
import {StyleSheet, View} from 'react-native'
import {observer} from 'mobx-react-lite'
import ListItem from '../../components/ListItem'
import List from '../../components/List'
import {FavoritesStoreImpl, FavoritesStore} from '../../stores/favorite'

const FinalList = List(ListItem)

interface ListProps {
  store: FavoritesStoreImpl
}

const FavoriteList: React.FC<ListProps> = ({store}) => {
  const data = store.favorites

  console.log(store.favorites) //BUG - required. without this, the component does not get updated when store changes. Only when i have this line

  return (
    <View style={styles.wrapper}>
      <FinalList items={data} store={FavoritesStore} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 6,
    marginVertical: 10,
    marginHorizontal: 15,
  },
})

export default observer(FavoriteList)
