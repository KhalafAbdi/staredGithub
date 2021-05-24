import axios from 'axios'

import {FetchResponse} from '../types'

const fetch = async (url: string) =>
  await axios.get<FetchResponse>(url).then(res => res.data)

export default fetch
