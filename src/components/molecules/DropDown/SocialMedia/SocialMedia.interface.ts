export type TSocialMedia =
  | 'instagram'
  | 'linkedin'
  | 'twitter'
  | 'youtube'
  | 'facebook'

export interface ISocialMedia {
  wrapperElementClassName?: string
  socialMedia: TSocialMedia
}
