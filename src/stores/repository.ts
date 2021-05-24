import {action, makeObservable, observable} from 'mobx'
import {PageData, pageNumber} from '../types'
import fetch from '../util/fetch'
import mapResponseToRepository from '../util/mapResponseToRepository'

export class RepositoryStoreImpl {
  Repository: PageData[] = []
  page: pageNumber = 1
  Perpage: number = 5
  lastPage = Math.ceil(1000 / this.Perpage)

  constructor() {
    makeObservable(this, {
      Repository: observable,
      page: observable,
      load: action,
      setPage: action,
      goToFirstpage: action,
      goToLastPage: action,
      goOnePageForward: action,
      goOnePageBack: action,
    })

    this.load()
  }

  async load() {
    const res = await fetch(
      `https://api.github.com/search/repositories?q=stars:>1&sort=stars&page=${this.page}&per_page=${this.Perpage}`,
    )

    const repository = mapResponseToRepository(res, this.page)
    const found = this.Repository.find(element => element.page == this.page)

    if (found) return
    if (!repository) return

    this.Repository.push(repository)
  }

  setPage(number: pageNumber) {
    this.page = number
    this.load()
  }

  goToFirstpage() {
    if (this.page == 1) return
    this.setPage(1)
  }

  goToLastPage() {
    if (this.page == this.lastPage) return
    this.setPage(this.lastPage)
  }

  goOnePageForward() {
    if (this.page == this.lastPage) return

    this.page++
    this.setPage(this.page)
  }

  goOnePageBack() {
    if (this.page == 1) return

    this.page--
    this.setPage(this.page)
  }
}

export const RepositoryStore = new RepositoryStoreImpl()
