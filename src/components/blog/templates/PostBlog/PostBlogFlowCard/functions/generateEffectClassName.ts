import { IFlowCardStateProps } from '../PostBlogFlowCard.interface'

interface IGenerateEffectClassName {
  flowCardActive: IFlowCardStateProps
}

interface IReturnGenerateEffectClassName {
  buttonArrowEffectClassName: string
  wrapperEffectClassName: string
  wrapperInputAndButtonsEffectClassName: string
}

export const generateEffectClassName = ({
  flowCardActive,
}: IGenerateEffectClassName): IReturnGenerateEffectClassName => {
  let allEffectClassName = {
    wrapperEffectClassName: '',
    buttonArrowEffectClassName: '',
    wrapperInputAndButtonsEffectClassName: '',
  }

  if (flowCardActive.clicked === 1) {
    if (flowCardActive.active) {
      allEffectClassName = {
        wrapperEffectClassName: 'animate-open-fixed-card-wrapper lg:max-w-full',
        buttonArrowEffectClassName: 'hiddenArrow lg:hidden',
        wrapperInputAndButtonsEffectClassName:
          'animate-open-fixed-card-internal',
      }
    }

    if (!flowCardActive.active) {
      allEffectClassName = {
        wrapperEffectClassName: 'animate-close-fixed-card-wrapper lg:!h-[6rem]',
        buttonArrowEffectClassName: 'showArrow lg:-mt-3',
        wrapperInputAndButtonsEffectClassName:
          'animate-close-fixed-card-internal',
      }
    }
  }

  return allEffectClassName
}
