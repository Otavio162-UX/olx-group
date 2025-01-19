import { ExternalRoutes } from '@/routes/routes'
import {
  mdiFacebook,
  mdiInstagram,
  mdiLinkedin,
  mdiTwitter,
  mdiYoutube,
} from '@mdi/js'

export const footerSocialMediaIcons = [
  {
    iconPath: mdiFacebook,
    link: ExternalRoutes.FACEBOOK,
  },
  {
    iconPath: mdiYoutube,
    link: ExternalRoutes.YOUTUBE,
  },
  {
    iconPath: mdiTwitter,
    link: ExternalRoutes.TWITTER,
  },
  {
    iconPath: mdiInstagram,
    link: ExternalRoutes.INSTAGRAM,
  },
  {
    iconPath: mdiLinkedin,
    link: ExternalRoutes.LINKEDIN,
  },
]
