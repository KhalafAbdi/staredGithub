import * as React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface MaterialIconProps {
  iconName: string
  size: number
  color: string
  onPress?: () => void
}

export const MaterialIcon: React.FC<MaterialIconProps> = props => {
  return (
    <Icon
      name={props.iconName}
      size={props.size}
      color={props.color}
      onPress={props.onPress}
    />
  )
}

export default MaterialIcon
