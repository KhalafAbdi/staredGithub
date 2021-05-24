import {pageNumber, Repository, FetchResponse, PageData} from '../types'

const mapResponseToRepository = (
  response: FetchResponse,
  page: pageNumber,
): PageData | null => {
  if (!response.items) return null

  const {items} = response
  const repositories: Repository[] = []

  items.forEach((element: Repository) => {
    const t = {
      id: element.id,
      name: element.name,
      html_url: element.html_url,
      description: element.description,
      created_at: element.created_at,
      updated_at: element.updated_at,
      size: element.size,
      language: element.language,
      forks: element.forks,
      open_issues: element.open_issues,
      watchers: element.watchers,
      owner: {
        login: element.owner.login,
        avatar_url: element.owner.avatar_url,
        html_url: element.owner.html_url,
      },
    }

    repositories.push(t)
  })

  return {page, data: repositories}
}

export default mapResponseToRepository
