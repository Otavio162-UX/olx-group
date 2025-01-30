import { generateArticleId } from '@/utils/PostBlog'

interface IGoToIndexPost {
  indexTopic: number
}

export const goToIndexPost = ({ indexTopic }: IGoToIndexPost) => {
  const postElement = document.getElementById(generateArticleId({ indexTopic }))

  window.scrollTo({
    top: postElement?.offsetTop || 0,
    behavior: 'smooth',
  })
}
