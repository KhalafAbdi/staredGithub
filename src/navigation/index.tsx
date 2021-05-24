import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'

import BottomTabNavigator from './BottomNavigation'

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}

export default Navigation
