import { HomeBlogArticles } from '@/components/blog/templates/HomeBlog/HomeBlogArticles'
import { HomeBlogLastNews } from '@/components/blog/templates/HomeBlog/HomeBlogLastNews'
import { HomeBlogSubscribe } from '@/components/blog/templates/HomeBlog/HomeBlogSubscribe'
import { twMerge } from 'tailwind-merge'

const BlogPage = () => {
  return (
    <main>
      <section className={twMerge('wrapperContainer max-w-container1328')}>
        <HomeBlogLastNews />
        <HomeBlogArticles />
      </section>
      <HomeBlogSubscribe />
    </main>
  )
}

export default BlogPage
