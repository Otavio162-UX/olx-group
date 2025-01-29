import { HomeMainOlxGroupInfoTexts } from '@/components/main/molecules/HomeMain/HomeMainOlxGroupInfoTexts'
import { twMerge } from 'tailwind-merge'
import { homeMainOlxGroupInfo } from './arrays/homeMainOlxGroupInfo'

const HomeMainOlxGroupInfo = (): JSX.Element => {
  return (
    <div
      className={twMerge(
        'grid grid-cols-1 gap-x-14 gap-y-8',
        'md:grid-cols-3 md:gap-x-4',
        'lg:grid-cols-3 lg:gap-x-8',
        'xl:gap-x-14'
      )}
    >
      {homeMainOlxGroupInfo.map((textGroup, indexTextGroup) => (
        <HomeMainOlxGroupInfoTexts
          key={`home-olx-group-info-text-${indexTextGroup}`}
          {...textGroup}
        />
      ))}
    </div>
  )
}

export { HomeMainOlxGroupInfo }
