import { Text } from '@/components/atoms/Text'
import { mdiChevronRight } from '@mdi/js'
import Icon from '@mdi/react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { ILinkTab } from './LinkTab.interface'

const LinkTab = ({
  textClassName,
  href,
  text,
  showIcon,
}: ILinkTab): JSX.Element => {
  return (
    <Link href={href}>
      <Text
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

export { LinkTab }
