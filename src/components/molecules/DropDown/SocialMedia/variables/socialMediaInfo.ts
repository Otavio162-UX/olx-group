import { ExternalRoutes } from '@/routes/routes'
import {
  mdiFacebook,
  mdiInstagram,
  mdiLinkedin,
  mdiTwitter,
  mdiYoutube,
} from '@mdi/js'
import { TSocialMediaInfo } from '../SocialMedia.interface'

export const socialMediaInfo: TSocialMediaInfo = {
  twitter: {
    iconPath: mdiTwitter,
    iconClassName: 'text-primary-100 text-2xl',
    text: 'Twitter',
    link: ExternalRoutes.TWITTER,
  },
  linkedin: {
    iconPath: mdiLinkedin,
    iconClassName: 'text-primary-100 text-2xl',
    text: 'LinkedIn',
    link: ExternalRoutes.LINKEDIN,
  },
  instagram: {
    iconPath: mdiInstagram,
    iconClassName: 'text-primary-100 text-2xl',
    text: 'Instagram',
    link: ExternalRoutes.INSTAGRAM,
  },
  facebook: {
    iconPath: mdiFacebook,
    iconClassName: 'text-transparent text-2xl stroke-1 stroke-primary-100',
    text: 'Facebook',
    link: ExternalRoutes.FACEBOOK,
  },
  youtube: {
    iconPath: mdiYoutube,
    iconClassName: 'text-primary-100 text-2xl',
    text: 'YouTube',
    link: ExternalRoutes.YOUTUBE,
  },
}
