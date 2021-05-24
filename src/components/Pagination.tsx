import * as React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {observer} from 'mobx-react-lite'
import {RepositoryStoreImpl} from '../stores/repository'
import MaterialIcon from './icons/MaterialIcon'

interface PaginationProps {
  store: RepositoryStoreImpl
}

const Pagination: React.FC<PaginationProps> = ({store}) => {
  return (
    <View style={styles.paginationContainer}>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => store.goToFirstpage()}>
        <MaterialIcon iconName="first-page" color="gray" size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => store.goOnePageBack()}>
        <MaterialIcon iconName="arrow-back" color="gray" size={25} />
      </TouchableOpacity>
      <Text style={styles.text}>
        {store.page} of {store.lastPage}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => store.goOnePageForward()}>
        <MaterialIcon iconName="arrow-forward" color="gray" size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => store.goToLastPage()}>
        <MaterialIcon iconName="last-page" color="gray" size={25} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  button: {
    padding: 5,
    marginHorizontal: 2,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    marginHorizontal: 10,
  },
})

export default observer(Pagination)
