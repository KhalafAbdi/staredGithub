import * as React from 'react'
import {ScrollView} from 'react-native'

import {Repository} from '../types'
import {FavoritesStoreImpl} from '../stores/favorite'
import {RepositoryStoreImpl} from '../stores/repository'

interface ListProps {
  items: Repository[]
  store?: FavoritesStoreImpl | RepositoryStoreImpl
}

const List =
  (ListItem: any) =>
  ({items, store}: ListProps) => {
    return (
      <ScrollView>
        {items.map((item: Repository) => (
          <ListItem key={item.id} item={item} store={store} />
        ))}
      </ScrollView>
    )
  }
export default List
