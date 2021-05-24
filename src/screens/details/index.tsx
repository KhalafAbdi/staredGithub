import {StyleSheet, Share, View, Button} from 'react-native'
import {RouteProp} from '@react-navigation/native'
import * as React from 'react'

import DetailsHeader from './Header'
import DetailsCard from './Stats'
import DetailsOwner from './Owner'

import {FavoritesStore} from '../../stores/favorite'

interface DetailsProps {
  route: any
}

const Details: React.FC<DetailsProps> = ({route}) => {
  const {params} = route

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Follow the biggest github projects!',
      })
      if (result.action === Share.sharedAction) {
        console.log('Shared')
      } else if (result.action === Share.dismissedAction) {
        console.log('Dismised')
      }
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }

  return (
    <View style={styles.wrapper}>
      <DetailsHeader item={params} store={FavoritesStore} />
      <DetailsCard
        description={params.description}
        watchers={params.watchers}
        forks={params.forks}
        open_issues={params.open_issues}
        created_at={params.created_at}
        updated_at={params.updated_at}
      />
      <DetailsOwner owner={params.owner} />
      <View style={styles.share}>
        <Button onPress={onShare} title="Share" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  share: {
    marginTop: 10,
  },
})

export default Details
