import { Title } from '@/components/generic/atoms/Title'
import { blogCategoriesNavigation } from '@/variables'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const HeaderBlogDropDownCategories = (): JSX.Element => {
  return (
    <nav
      className={twMerge(
        'bg-neutral-70',
        'lg:absolute lg:top-full lg:left-0 lg:z-20 lg:min-h-[19.0625rem] lg:py-6'
      )}
    >
      <div className="wrapperContainer max-w-container1328 flex flex-col gap-4">
        <div className={twMerge('lg:flex lg:flex-col lg:gap-2')}>
          {blogCategoriesNavigation.map((category, indexCategory) => (
            <Link
              href={category.link}
              key={`category-drop-down-${indexCategory}`}
              className="flex-1"
            >
              <Title
                tag="h3"
                className={twMerge(
                  'text-sm font-semibold w-max py-2 px-3',
                  'lg:px-0'
                )}
              >
                {category.title}
              </Title>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export { HeaderBlogDropDownCategories }
