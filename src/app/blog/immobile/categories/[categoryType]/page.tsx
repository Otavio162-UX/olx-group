import { BlogReceiveOurNews } from '@/components/blog/templates/BlogReceiveOurNews'
import { CategoriesBlogBody } from '@/components/blog/templates/CategoriesBlog/CategoriesBlogBody'
import { twMerge } from 'tailwind-merge'

const CategoryTypePage = (): JSX.Element => {
  return (
    <main
      className={twMerge(
        'wrapperContainer max-w-container1328 flex flex-col gap-8 pb-9',
        'lg:pb-12'
      )}
    >
      <CategoriesBlogBody />
      <BlogReceiveOurNews />
    </main>
  )
}

export default CategoryTypePage
