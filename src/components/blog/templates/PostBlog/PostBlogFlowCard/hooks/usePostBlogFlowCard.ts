'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { IFlowCardStateProps } from '../PostBlogFlowCard.interface'
import { generateEffectClassName } from '../functions/generateEffectClassName'

interface IReturnUsePostBlogFlowCard {
  buttonArrowEffectClassName: string
  wrapperEffectClassName: string
  wrapperInputAndButtonsEffectClassName: string
  setFlowCardActive: Dispatch<SetStateAction<IFlowCardStateProps>>
}

export const usePostBlogFlowCard = (): IReturnUsePostBlogFlowCard => {
  const [flowCardActive, setFlowCardActive] = useState<IFlowCardStateProps>({
    active: false,
    clicked: 0,
  })

  const {
    buttonArrowEffectClassName,
    wrapperEffectClassName,
    wrapperInputAndButtonsEffectClassName,
  } = generateEffectClassName({ flowCardActive })

  return {
    buttonArrowEffectClassName,
    setFlowCardActive,
    wrapperEffectClassName,
    wrapperInputAndButtonsEffectClassName,
  }
}
