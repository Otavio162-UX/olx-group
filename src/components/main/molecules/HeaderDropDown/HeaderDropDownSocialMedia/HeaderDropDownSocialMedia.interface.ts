export type THeaderDropDownSocialMedia =
  | 'instagram'
  | 'linkedin'
  | 'twitter'
  | 'youtube'
  | 'facebook'

export interface IHeaderDropDownSocialMedia {
  wrapperElementClassName?: string
  socialMedia: THeaderDropDownSocialMedia
}
