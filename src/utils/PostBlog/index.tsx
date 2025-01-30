interface IGenerateArticleId {
  indexTopic: number
}

export const generateArticleId = ({ indexTopic }: IGenerateArticleId) =>
  `article-post-id-${indexTopic}`
