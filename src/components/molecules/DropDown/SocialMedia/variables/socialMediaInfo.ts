import { ExternalRoutes } from '@/routes'
import { IconType } from 'react-icons'
import { FiInstagram } from 'react-icons/fi'
import { PiYoutubeLogo } from 'react-icons/pi'
import { RiFacebookCircleFill, RiTwitterXFill } from 'react-icons/ri'
import { SlSocialLinkedin } from 'react-icons/sl'
import { TSocialMedia } from '..'

interface ISocialMediaRenderInfo {
  Logo: IconType
  logoClassName: string
  text: string
  link: string
}

type TSocialMediaInfo = {
  [key in TSocialMedia]: ISocialMediaRenderInfo
}

const logoDefaultClassName = 'text-primary-100 text-2xl'

export const socialMediaInfo: TSocialMediaInfo = {
  twitter: {
    Logo: RiTwitterXFill,
    logoClassName: logoDefaultClassName,
    text: 'Twitter',
    link: ExternalRoutes.TWITTER,
  },
  linkedin: {
    Logo: SlSocialLinkedin,
    logoClassName: logoDefaultClassName,
    text: 'LinkedIn',
    link: ExternalRoutes.LINKEDIN,
  },
  instagram: {
    Logo: FiInstagram,
    logoClassName: logoDefaultClassName,
    text: 'Instagram',
    link: ExternalRoutes.INSTAGRAM,
  },
  facebook: {
    Logo: RiFacebookCircleFill,
    logoClassName: 'text-transparent text-2xl stroke-1 stroke-primary-100',
    text: 'Facebook',
    link: ExternalRoutes.FACEBOOK,
  },
  youtube: {
    Logo: PiYoutubeLogo,
    logoClassName: logoDefaultClassName,
    text: 'YouTube',
    link: ExternalRoutes.YOUTUBE,
  },
}
