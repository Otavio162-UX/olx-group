import { HomeBlogArticles } from '@/components/blog/templates/HomeBlog/HomeBlogArticles'
import { HomeBlogEbooks } from '@/components/blog/templates/HomeBlog/HomeBlogEbooks'
import { HomeBlogLastNews } from '@/components/blog/templates/HomeBlog/HomeBlogLastNews'
import { HomeBlogSubscribe } from '@/components/blog/templates/HomeBlog/HomeBlogSubscribe'
import { twMerge } from 'tailwind-merge'

const BlogPage = () => {
  return (
    <main>
      <section
        className={twMerge('wrapperContainer max-w-container1328', 'lg:pb-7')}
      >
        <HomeBlogLastNews />
        <HomeBlogArticles />
        <HomeBlogEbooks />
      </section>
      <HomeBlogSubscribe />
    </main>
  )
}

export default BlogPage
