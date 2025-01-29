export type THeaderMainDropDownSocialMedia =
  | 'instagram'
  | 'linkedin'
  | 'twitter'
  | 'youtube'
  | 'facebook'

export interface IHeaderMainDropDownSocialMedia {
  wrapperElementClassName?: string
  socialMedia: THeaderMainDropDownSocialMedia
}
