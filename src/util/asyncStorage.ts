import AsyncStorage from '@react-native-async-storage/async-storage'

import {Repository} from '../types'

export const storeRepository = async (key: string, value: Repository[]) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    throw new Error('Something went wrong')
  }
}

export const getStoredRepositories = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    throw new Error('Something went wrong')
  }
}
