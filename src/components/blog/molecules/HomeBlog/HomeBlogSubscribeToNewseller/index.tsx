'use client'

import { Button } from '@/components/generic/atoms/Button'
import { Input } from '@/components/generic/atoms/Input'
import { Text } from '@/components/generic/atoms/Text'
import { ErrorMessage } from '@/components/generic/molecules/ErrorMessage'
import { twMerge } from 'tailwind-merge'
import { useSubscribeToNewseller } from './hooks/useSubscribeToNewseller'

const HomeBlogSubscribeToNewseller = (): JSX.Element => {
  const { email, error, setEmail, handleSubmit, loading, blogType } =
    useSubscribeToNewseller()

  return (
    <section
      className={twMerge(
        blogType,
        'hidden',
        'lg:fixed lg:block lg:left-[67%] lg:bottom-10 lg:mx-auto lg:z-[11]',
        '2xl:left-[calc(50%_+_480px)]'
      )}
    >
      <div className="mx-auto wrapperContainer max-w-container1328">
        <form
          onSubmit={handleSubmit}
          className={twMerge(
            'lg:w-full bg-neutral-70  lg:max-w-[25rem] lg:rounded-2xl lg:border-8 lg:border-theme-blog-secondary-color-60 lg:px-4 lg:py-6 lg:flex lg:flex-col lg:gap-4'
          )}
        >
          <label
            htmlFor="emailToNewSeller"
            className="text-neutral-130 text-xl font-bold"
          >
            Assine a newsletter
          </label>

          <div>
            <Input
              id="emailToNewSeller"
              placeholder="E-mail"
              className="h-12"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              minLength={8}
              maxLength={100}
            />

            <ErrorMessage message={error} />
          </div>

          <Button
            size="large"
            className="w-full bg-theme-blog-secondary-color-100 hover:bg-theme-blog-secondary-color-110 active:bg-theme-blog-secondary-color-110"
            loading={loading}
            type="submit"
          >
            Assinar
          </Button>

          <Text tag="p" className="text-xs text-neutral-130">
            Ao assinar, você concorda com nossa Política de Privacidade.
          </Text>
        </form>
      </div>
    </section>
  )
}

export { HomeBlogSubscribeToNewseller }
