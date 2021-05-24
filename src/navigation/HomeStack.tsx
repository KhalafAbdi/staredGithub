import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from '../screens/home'
import DetailsScreen from '../screens/details'

import {HomeStackParamList} from '../types'

const HomeStack = createStackNavigator<HomeStackParamList>()

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator
