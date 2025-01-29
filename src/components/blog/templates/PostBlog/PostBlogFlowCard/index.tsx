'use client'

import { useBlogSubscribeForm } from '@/components/blog/organisms/BlogSubscribe/BlogSubscribeForm/hooks/useBlogSubscribeForm'
import { Button } from '@/components/generic/atoms/Button'
import { Input } from '@/components/generic/atoms/Input'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import { ErrorMessage } from '@/components/generic/molecules/ErrorMessage'
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'
import Icon from '@mdi/react'
import { twMerge } from 'tailwind-merge'
import { usePostBlogFlowCard } from './hooks/usePostBlogFlowCard'

const PostBlogFlowCard = (): JSX.Element => {
  const { email, error, setEmail, handleSubmit, loading, blogType } =
    useBlogSubscribeForm()

  const {
    buttonArrowEffectClassName,
    setFlowCardActive,
    wrapperEffectClassName,
    wrapperInputAndButtonsEffectClassName,
  } = usePostBlogFlowCard()

  return (
    <form
      onSubmit={handleSubmit}
      className={twMerge('fixed bottom-0 w-full left-0 z-[11]')}
    >
      <div className="wrapperContainer max-w-container1328 flex justify-end">
        <div
          className={twMerge(
            blogType,
            'w-[calc(100vw_-_32px)] min-w-[21.875rem] border-8 border-theme-blog-secondary-color-70 px-4 py-6 flex flex-col gap-4 rounded-t-xl overflow-hidden h-[7.5rem]  bg-neutral-70',
            'md:max-w-[20.5rem]',
            'lg:flex-row lg:h-[6rem] lg:min-w-[17.5rem] lg:max-w-[17.5rem]',
            wrapperEffectClassName
          )}
        >
          <div
            className={twMerge(
              'flex items-center justify-between',
              'lg:items-start'
            )}
          >
            <Title
              tag="h6"
              className={twMerge(
                'text-xl font-bold text-neutral-130',
                'lg:text-nowrap'
              )}
            >
              Assine a newsletter
            </Title>

            <Button
              variant="clean"
              className={twMerge(
                'text-neutral-130',
                'lg:-mt-3',
                buttonArrowEffectClassName
              )}
              onClick={() => setFlowCardActive({ active: true, clicked: 1 })}
            >
              <Icon path={mdiChevronUp} size={1} />
            </Button>
          </div>

          <div
            className={twMerge(
              'invisible flex flex-col gap-4',
              'lg:flex-row lg:flex-1',
              wrapperInputAndButtonsEffectClassName
            )}
          >
            <div className={twMerge('flex flex-col gap-2', 'lg:flex-1')}>
              <div className="lg:flex-1">
                <Input
                  placeholder="E-mail"
                  className="h-12"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                  minLength={8}
                  maxLength={100}
                />
                <ErrorMessage message={error} />
              </div>

              <Text tag="p" className="text-xs text-neutral-80">
                Ao se inscrever, você concorda com nossa Política de Privacidade
              </Text>
            </div>

            <div
              className={twMerge(
                'flex items-center gap-4 justify-between',
                'lg:items-start'
              )}
            >
              <Button
                variant="clean"
                className={twMerge(
                  'py-4 min-w-[8.25rem] px-9 text-neutral-70 bg-theme-blog-secondary-color-100',
                  'lg:min-w-[12.625rem] lg:h-[3rem] lg:flex lg:items-center lg:justify-center'
                )}
                loading={loading}
                type="submit"
              >
                Assinar
              </Button>

              <Button
                variant="clean"
                className={twMerge(
                  'flex items-center gap-4 px-5 py-4 text-theme-blog-secondary-color-100',
                  'lg:min-w-[9.9375rem] lg:h-[3rem] lg:flex lg:items-center'
                )}
                disabled={loading}
                onClick={() => setFlowCardActive({ active: false, clicked: 1 })}
              >
                Fechar{' '}
                <Icon
                  path={mdiChevronDown}
                  size={1}
                  className="!text-neutral-130"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export { PostBlogFlowCard }
