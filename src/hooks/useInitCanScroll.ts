import { ICanScrollState } from '@/types/global'
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'

interface IReturnUseInitTabinationWrapperButtons {
  canScroll: ICanScrollState
  scrollContainerRef: RefObject<HTMLDivElement>
}

interface ITabinationUpdateScrollIndicators {
  scrollContainerRef: React.RefObject<HTMLDivElement>
  setCanScroll: Dispatch<SetStateAction<ICanScrollState>>
}

export const updateTabinationScrollIndicators = ({
  scrollContainerRef,
  setCanScroll,
}: ITabinationUpdateScrollIndicators) => {
  const container = scrollContainerRef.current
  if (container) {
    const marginOfError = 2

    setCanScroll({
      left: container.scrollLeft > 0,
      right:
        container.scrollLeft + container.clientWidth <
        container.scrollWidth - marginOfError,
    })
  }
}

export const useInitCanScroll = (): IReturnUseInitTabinationWrapperButtons => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const [canScroll, setCanScroll] = useState<ICanScrollState>({
    left: false,
    right: false,
  })

  useEffect(() => {
    updateTabinationScrollIndicators({ scrollContainerRef, setCanScroll })

    const container = scrollContainerRef.current

    if (container) {
      container.addEventListener('scroll', () =>
        updateTabinationScrollIndicators({ scrollContainerRef, setCanScroll })
      )
      window.addEventListener('resize', () =>
        updateTabinationScrollIndicators({ scrollContainerRef, setCanScroll })
      )

      return () => {
        container.removeEventListener('scroll', () =>
          updateTabinationScrollIndicators({
            scrollContainerRef,
            setCanScroll,
          })
        )
        window.removeEventListener('resize', () =>
          updateTabinationScrollIndicators({
            scrollContainerRef,
            setCanScroll,
          })
        )
      }
    }
  }, [])

  return {
    canScroll,
    scrollContainerRef,
  }
}
