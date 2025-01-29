import { Text } from '@/components/generic/atoms/Text'
import { mdiChevronRight } from '@mdi/js'
import Icon from '@mdi/react'
import { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'
import { IBreadCrumbs } from './BreadCrumbs.interface'

const BreadCrumbs = ({
  wrapperElementClassName,
  textClassName,
  iconClassName,
  paths,
}: IBreadCrumbs): JSX.Element => {
  return (
    <div
      className={twMerge('flex items-center gap-2', wrapperElementClassName)}
    >
      {paths.map((path, indexPath) => (
        <Fragment key={`breadcrumbs-${indexPath}`}>
          <Text
            tag="p"
            className={twMerge(
              'font-semibold text-lg capitalize',
              textClassName
            )}
          >
            {path}
          </Text>

          <Icon
            path={mdiChevronRight}
            size={1}
            className={twMerge('last:hidden', iconClassName)}
          />
        </Fragment>
      ))}
    </div>
  )
}

export { BreadCrumbs }
