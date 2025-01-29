import { BlogReceiveOurNews } from '@/components/blog/templates/BlogReceiveOurNews'
import { SearchBlogResultsContainer } from '@/components/blog/templates/SearchBlog/SearchBlogResultsContainer'
import { twMerge } from 'tailwind-merge'

const SearchImmobilePage = (): JSX.Element => {
  return (
    <main
      className={twMerge(
        'wrapperContainer max-w-container1328 flex flex-col gap-8 pb-9',
        'lg:pb-12'
      )}
    >
      <SearchBlogResultsContainer />
      <BlogReceiveOurNews />
    </main>
  )
}

export default SearchImmobilePage
