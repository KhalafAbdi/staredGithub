import * as React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeStack from './HomeStack'
import Favorites from '../screens/favorites'

import MaterialIcon from '../components/icons/MaterialIcon'

export type BottomTabParamList = {
  Home: undefined
  Favorites: undefined
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#0B355F',
        inactiveTintColor: '#76b6f4',
        style: {
          backgroundColor: '#1C86EE',
        },
        showLabel: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Homes',
          tabBarIcon: ({focused, color}) => (
            <BottomTabIcon
              active="home"
              inactive="home"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({focused, color}) => (
            <BottomTabIcon
              active="favorite"
              inactive="favorite"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

const BottomTabIcon = (props: {
  active: string
  inactive: string
  color: string
  focused?: boolean
}) => {
  const {focused, active, inactive, color} = props

  const iconName = focused ? active : inactive

  return <MaterialIcon iconName={iconName} size={30} color={color} />
}

export default BottomTabNavigator
