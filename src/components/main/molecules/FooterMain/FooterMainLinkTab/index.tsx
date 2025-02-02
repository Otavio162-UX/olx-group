import { Text } from '@/components/generic/atoms/Text'
import { mdiChevronRight } from '@mdi/js'
import Icon from '@mdi/react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { IFooterMainLinkTab } from './FooterMainLinkTab.interface'

const FooterMainLinkTab = ({
  textClassName,
  href,
  text,
  showIcon,
}: IFooterMainLinkTab): JSX.Element => {
  return (
    <Link href={href}>
      <Text
        tag="p"
        className={twMerge(
          'text-sm text-neutral-120 font-medium flex items-center gap-2',
          textClassName
        )}
      >
        {text}

        {showIcon && <Icon path={mdiChevronRight} size={1} />}
      </Text>
    </Link>
  )
}

export { FooterMainLinkTab }
