import {action, makeObservable, observable} from 'mobx'
import {Repository} from '../types'

export class FavoritesStoreImpl {
  favorites: Repository[] = []

  constructor() {
    makeObservable(this, {
      favorites: observable,
      add: action,
      remove: action,
    })
  }

  add(item: Repository) {
    this.favorites.push(item)
  }

  remove(id: number) {
    this.favorites = this.favorites.filter(item => item.id !== id)
  }
}

export const FavoritesStore = new FavoritesStoreImpl()
