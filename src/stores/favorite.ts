import {action, makeObservable, observable} from 'mobx'
import {Repository} from '../types'

import {storeRepository, getStoredRepositories} from '../util/asyncStorage'

export class FavoritesStoreImpl {
  favorites: Repository[] = []

  constructor() {
    makeObservable(this, {
      favorites: observable,
      load: action,
      add: action,
      remove: action,
      updateStorage: action,
    })

    this.load()
  }

  async updateStorage() {
    storeRepository('Favorites', this.favorites)
    this.load()
  }

  async load() {
    const storedRepositories = await getStoredRepositories('Favorites')
    if (storedRepositories) {
      this.favorites = storedRepositories
    }
  }

  add(item: Repository) {
    this.favorites.push(item)

    this.updateStorage()
  }

  remove(id: number) {
    this.favorites = this.favorites.filter(item => item.id !== id)
    this.updateStorage()
  }
}

export const FavoritesStore = new FavoritesStoreImpl()
