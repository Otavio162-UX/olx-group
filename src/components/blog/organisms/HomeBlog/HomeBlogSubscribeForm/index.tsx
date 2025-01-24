'use client'

import { Button } from '@/components/generic/atoms/Button'
import { Input } from '@/components/generic/atoms/Input'
import { Text } from '@/components/generic/atoms/Text'
import { ErrorMessage } from '@/components/generic/molecules/ErrorMessage'
import { useHomeBlogSubscribeForm } from './hooks/useHomeBlogSubscribeForm'

const HomeBlogSubscribeForm = (): JSX.Element => {
  const { email, error, setEmail, handleSubmit, loading } =
    useHomeBlogSubscribeForm()

  return (
    <form onSubmit={handleSubmit} className="flex gap-6">
      <div className="flex flex-col gap-2 max-w-[15.625rem]">
        <div>
          <Input
            placeholder="E-mail"
            className="h-12"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            name="email"
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
        className="bg-orange-100 hover:bg-orange-110 py-3 px-6 active:bg-orange-110 h-max rounded-lg border-0"
        type="submit"
        loading={loading}
      >
        Inscrever
      </Button>
    </form>
  )
}

export { HomeBlogSubscribeForm }
