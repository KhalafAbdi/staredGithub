export interface FetchResponse {
  items: Repository[]
}

export interface Repository {
  id: number
  name: string
  html_url: string
  description: string
  created_at: Date
  updated_at: Date
  size: number
  language: string
  forks: number
  open_issues: number
  watchers: number
  owner: {
    login: string
    avatar_url: string
    html_url: string
  }
}

export type pageNumber = number

export interface PageData {
  page: pageNumber
  data: Repository[]
}

export type HomeStackParamList = {
  Home: undefined
  Details: undefined
}

export type BottomTabParamList = {
  Home: undefined
  Favorites: undefined
}
