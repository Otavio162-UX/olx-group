import { Dispatch, SetStateAction } from 'react'

export interface ISearchBlogTab {
  tabId: string
  setSearchDataIsEmpty: Dispatch<SetStateAction<boolean>>
}
