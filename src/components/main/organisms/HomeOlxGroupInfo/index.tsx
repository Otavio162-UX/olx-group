import { HomeOlxGroupInfoTexts } from '@/components/main/molecules/HomeOlxGroup/HomeOlxGroupInfoTexts'
import { twMerge } from 'tailwind-merge'
import { homeOlxGroupInfo } from './arrays/homeOlxGroupInfo'

const HomeOlxGroupInfo = (): JSX.Element => {
  return (
    <div
      className={twMerge(
        'grid grid-cols-1 gap-x-14 gap-y-8',
        'lg:grid-cols-3 lg:gap-x-8',
        'xl:gap-x-14'
      )}
    >
      {homeOlxGroupInfo.map((textGroup, indexTextGroup) => (
        <HomeOlxGroupInfoTexts
          key={`home-olx-group-info-text-${indexTextGroup}`}
          {...textGroup}
        />
      ))}
    </div>
  )
}

export { HomeOlxGroupInfo }
