import { HomeBlogLastNews } from '@/components/blog/templates/HomeBlog/HomeBlogLastNews'
import { twMerge } from 'tailwind-merge'

const BlogPage = () => {
  return (
    <main>
      <section className={twMerge('wrapperContainer max-w-container1328')}>
        <HomeBlogLastNews />
      </section>
    </main>
  )
}

export default BlogPage
