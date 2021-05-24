import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native'

interface OwnerProps {
  owner: {
    login: string
    avatar_url: string
    html_url: string
  }
}

const Owner: React.FC<OwnerProps> = ({owner}) => {
  const handlePress = () => {
    Linking.openURL(owner.html_url)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Owner</Text>
      <TouchableOpacity style={styles.card} onPress={handlePress}>
        <Image source={{uri: owner.avatar_url}} style={styles.image} />
        <Text style={styles.name}>{owner.login}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
  },
})

export default Owner
