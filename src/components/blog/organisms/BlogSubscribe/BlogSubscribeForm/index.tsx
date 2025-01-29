'use client'

import { Button } from '@/components/generic/atoms/Button'
import { Input } from '@/components/generic/atoms/Input'
import { Text } from '@/components/generic/atoms/Text'
import { ErrorMessage } from '@/components/generic/molecules/ErrorMessage'
import { twMerge } from 'tailwind-merge'
import { useBlogSubscribeForm } from './hooks/useBlogSubscribeForm'

const BlogSubscribeForm = (): JSX.Element => {
  const { email, error, setEmail, handleSubmit, loading, blogType } =
    useBlogSubscribeForm()

  return (
    <form onSubmit={handleSubmit} className={twMerge(blogType, 'flex gap-6')}>
      <div className="flex flex-col gap-2 max-w-[15.625rem]">
        <div>
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

        <Text tag="p" className="text-xs text-neutral-70">
          Ao se inscrever, você concorda com nossa Política de Privacidade
        </Text>
      </div>

      <Button
        size="medium"
        className="bg-theme-blog-color-100 hover:bg-theme-blog-color-110 py-3 px-6 active:bg-orange-110 h-max rounded-lg border-0 w-[7.1875rem]"
        type="submit"
        loading={loading}
      >
        Inscrever
      </Button>
    </form>
  )
}

export { BlogSubscribeForm }
