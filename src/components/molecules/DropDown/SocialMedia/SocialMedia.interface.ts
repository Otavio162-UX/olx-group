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

interface ISocialMediaRenderInfo {
  iconPath: string
  iconClassName: string
  text: string
  link: string
}

export type TSocialMediaInfo = {
  [key in TSocialMedia]: ISocialMediaRenderInfo
}
