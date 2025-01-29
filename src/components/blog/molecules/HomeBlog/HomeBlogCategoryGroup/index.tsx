'use client'

import { Button } from '@/components/generic/atoms/Button'
import { ButtonScrollIndicator } from '@/components/generic/atoms/Tabination/TabinationButtonIndicator'
import { useGetBlogCategoryNavigation } from '@/hooks/blog/useGetBlogCategoryNavigation'
import { useInitCanScroll } from '@/hooks/useInitCanScroll'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const HomeBlogCategoryGroup = (): JSX.Element => {
  const { canScroll, scrollContainerRef } = useInitCanScroll()

  const blogCategoriesNavigation = useGetBlogCategoryNavigation()

  return (
    <div className="relative border border-[#cccccc] rounded-2xl overflow-hidden">
      <div
        ref={scrollContainerRef}
        className={twMerge(
          'flex items-center bg-primary-70 justify-between overflow-auto divide-x divide-primary-80'
        )}
      >
        {canScroll.left && (
          <ButtonScrollIndicator
            variant="left"
            className="bg-transparent py-2.5 bg-gradient"
          />
        )}

        {blogCategoriesNavigation.map((category, indexCategory) => (
          <Link
            href={category.link}
            key={`category-${indexCategory}`}
            className="mx-auto"
          >
            <Button
              variant="clean"
              size="large"
              className={twMerge(
                'text-primary-100 text-base font-bold rounded-none px-3 tracking-tight w-full  text-nowrap',
                'xl:text-lg xl:px-4 xl:tracking-normal',
                '2xl:px-6'
              )}
            >
              {category.title}
            </Button>
          </Link>
        ))}

        {canScroll.right && (
          <ButtonScrollIndicator
            variant="right"
            className="bg-transparent py-2.5 bg-gradient !border-0"
          />
        )}
      </div>
    </div>
  )
}

export { HomeBlogCategoryGroup }
