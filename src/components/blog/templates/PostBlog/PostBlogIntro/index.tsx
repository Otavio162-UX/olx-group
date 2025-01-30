'use client'

import { PostBlogOtherArticlesTitles } from '@/components/blog/molecules/PostBlog/PostBlogOtherArticlesTitles'
import { BlogArticleCard } from '@/components/blog/organisms/BlogArticleCard'
import { BlogEbookCard } from '@/components/blog/organisms/BlogEbookCard'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { generateArticleId } from '@/utils/PostBlog'
import { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'
import { IPostBlogIntro } from './PostBlogIntro.interface'
import { postBlogInfoProps } from './variables/postBlogInfoProps'

const PostBlogIntro = ({
  articleDetails: [intro, topics, ...articles],
  otherArticles,
  otherEbooks,
}: IPostBlogIntro): JSX.Element => {
  const { articlesComponents } = postBlogInfoProps

  const blogType = useGetBlogType()

  return (
    <section
      className={twMerge(
        blogType,
        'py-9 flex flex-col',
        'lg:py-28 lg:flex-row lg:gap-20'
      )}
    >
      <article className={twMerge('flex flex-col gap-6 max-w-[52rem]')}>
        {[intro, topics].map((article, indexArticle) => (
          <div
            className="flex flex-col gap-4"
            key={`article-post-${indexArticle}`}
          >
            {article.map((item, indexItem) => (
              <Fragment key={`article-item-${indexArticle}-${indexItem}`}>
                {articlesComponents[item.type](item)}
              </Fragment>
            ))}
          </div>
        ))}

        {articles.map((article, indexArticle) => (
          <div
            className="flex flex-col gap-4"
            key={`article-post-${indexArticle}`}
            id={generateArticleId({ indexTopic: indexArticle })}
          >
            {article.map((item, indexItem) => (
              <Fragment key={`article-item-${indexArticle}-${indexItem}`}>
                {articlesComponents[item.type](item)}
              </Fragment>
            ))}
          </div>
        ))}
      </article>

      <article
        className={twMerge('flex-1 mt-8 flex flex-col gap-10', 'lg:mt-0')}
      >
        <div className="flex flex-col gap-10">
          <PostBlogOtherArticlesTitles
            highlightText="Notícias"
            title="Recomendados"
          />

          {otherArticles.map((otherArticle, indexOtherArticle) => (
            <BlogArticleCard
              key={`other-article-card-${indexOtherArticle}`}
              {...otherArticle}
            />
          ))}
        </div>

        <div className="flex flex-col gap-10">
          <PostBlogOtherArticlesTitles
            highlightText="E-books"
            title="Recomendados"
          />

          <div className={twMerge('flex flex-col gap-6', 'lg:gap-10')}>
            {otherEbooks.map((otherEbook, indexOtherEbook) => (
              <BlogEbookCard
                key={`other-ebook-${indexOtherEbook}`}
                {...otherEbook}
              />
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}

export { PostBlogIntro }
