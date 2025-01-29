'use client'

import { Button } from '@/components/generic/atoms/Button'
import { Input } from '@/components/generic/atoms/Input'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import { ErrorMessage } from '@/components/generic/molecules/ErrorMessage'
import { InternalRoutes } from '@/routes/routes'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { useBlogReceiveOurNewsProps } from './hooks/useBlogReceiveOurNewsProps'

const BlogReceiveOurNews = (): JSX.Element => {
  const { email, error, handleSubmit, loading, setEmail } =
    useBlogReceiveOurNewsProps()

  return (
    <form
      className={twMerge(
        'flex flex-col gap-6 pb-20 border-b border-neutral-130',
        'md:mx-auto md:border-0 md:pb-0',
        'lg:mx-0 lg:flex-row lg:justify-between lg:items-center'
      )}
      onSubmit={handleSubmit}
    >
      <div>
        <Title
          tag="h3"
          className="font-ZonaPro font-semibold text-xl text-primary-100"
        >
          Receba nossas novidades
        </Title>
        <Text tag="p" className="text-base text-neutral-100">
          Inscreva-se em nossa newsletter para receber atualizações
        </Text>
      </div>

      <div className={'flex flex-col gap-6'}>
        <div className={twMerge('flex flex-col gap-2', 'md:w-[32.8125rem]')}>
          <label
            htmlFor="emailReceiveOurNews"
            className={twMerge('hidden', 'lg:block lg:text-neutral-130')}
          >
            E-mail
          </label>

          <div className="flex gap-4">
            <div
              className={twMerge(
                'w-full max-w-[13.6875rem]',
                'md:max-w-[32.8125rem]'
              )}
            >
              <Input
                id="emailReceiveOurNews"
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
              className="w-full px-6 flex rounded-lg items-center justify-center bg-primary-100 max-w-max hover:bg-primary-110 active:bg-primary-110 h-12"
              loading={loading}
              type="submit"
            >
              Inscrever
            </Button>
          </div>
        </div>

        <Text tag="p" className="text-xs text-neutral-130">
          Ao se inscrever, você concorda com nossa{' '}
          <Link href={InternalRoutes.PRIVACY_POLICY}>
            <Text tag="span" className="underline">
              Política de Privacidade
            </Text>
          </Link>
        </Text>
      </div>
    </form>
  )
}

export { BlogReceiveOurNews }
