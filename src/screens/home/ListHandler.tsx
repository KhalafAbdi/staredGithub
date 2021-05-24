import * as React from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import {observer} from 'mobx-react-lite'
import {RepositoryStoreImpl, RepositoryStore} from '../../stores/repository'
import {FavoritesStore} from '../../stores/favorite'
import Pagination from '../../components/Pagination'
import List from '../../components/List'
import ListItem from '../../components/ListItem'

const FinalList = List(ListItem)

interface ListProps {
  store: RepositoryStoreImpl
}

const HomeList: React.FC<ListProps> = ({store}) => {
  const data =
    store.Repository.find(element => element.page == store.page)?.data || []

  return (
    <View style={styles.wrapper}>
      <FinalList items={data} store={FavoritesStore} />
      <Pagination store={RepositoryStore} />
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

export default observer(HomeList)
