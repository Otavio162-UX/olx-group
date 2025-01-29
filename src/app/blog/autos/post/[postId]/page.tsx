import { IPostBlogSocialMedia } from '@/components/blog/molecules/PostBlog/PostBlogSocialMedia/PostBlogSocialMedia.interface'
import { IBlogArticleCard } from '@/components/blog/organisms/BlogArticleCard/BlogArticleCard.interface'
import { IBlogEbookCard } from '@/components/blog/organisms/BlogEbookCard/BlogEbookCard.interface'
import { BlogSubscribe } from '@/components/blog/templates/BlogSubscribe'
import { PostBlogFlowCard } from '@/components/blog/templates/PostBlog/PostBlogFlowCard'
import { PostBlogInitialInfo } from '@/components/blog/templates/PostBlog/PostBlogInitialInfo'
import { PostBlogIntro } from '@/components/blog/templates/PostBlog/PostBlogIntro'
import { TPostBlogIntro } from '@/components/blog/templates/PostBlog/PostBlogIntro/PostBlogIntro.interface'
import { IPostIdPageParams } from '@/types/global'
import { mdiFacebook, mdiLink, mdiLinkedin, mdiTwitter } from '@mdi/js'

const articleDetails: TPostBlogIntro[][] = [
  [
    {
      children: 'Intro',
      type: 'big-title',
    },
    {
      children: `Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
        odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
        mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.`,
      type: 'default-bold-text',
    },
    {
      children: `Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
        odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
        mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.`,
      type: 'default-normal-text',
    },
  ],
  [
    {
      title: 'Tópicos',
      subtitle: 'Como vender um carro financiado?',
      topics: [
        {
          text: '1. Conheça as maneiras de vender carro financiado',
        },
        {
          text: '2. Saiba qual o valor exato em aberto',
        },
        {
          text: '3. Verifique toda a documentação',
        },
        {
          text: '4. Verifique toda a documentação',
        },
      ],
      type: 'topics',
    },
  ],
  [
    {
      children: 'Heading 3',
      type: 'medium-title',
    },
    {
      children: `Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.`,
      type: 'default-normal-text',
    },
    {
      children: `Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.`,
      type: 'default-normal-text',
    },
  ],
  [
    {
      children: 'Heading 4',
      type: 'medium-title',
    },
    {
      children: `Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.`,
      type: 'default-normal-text',
    },
    {
      imageUrl:
        'https://th.bing.com/th/id/OIP.yacPmIeVp3yoqSEeXLcBGgHaDt?rs=1&pid=ImgDetMain',
      altImage: 'image-alt',
      figureCaption: 'Image caption goes here',
      type: 'figure',
    },
  ],
  [
    {
      children: 'Heading 5',
      type: 'medium-title',
    },
    {
      children: `Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.`,
      type: 'default-normal-text',
    },
    {
      children: `"Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."`,
      type: 'italic-with-border',
    },
  ],
  [
    {
      children: 'Heading 6',
      type: 'medium-title',
    },
    {
      children: `Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.`,
      type: 'default-normal-text',
    },
    {
      children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      type: 'default-normal-text',
    },
  ],
]

const articleA: IBlogArticleCard = {
  imageSrc:
    'https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg',
  buttonTitle: 'Carreira',
  newsTitle:
    'ITBI na integralização de bens imóveis e sua importância para o planejamento patrimonial',
  newsDescription: 'Descrição do blog vai aqui',
  timeOlx: 'Time OLX',
  date: '11 Jan 2022',
  readTime: 'Leitura de 5 min',
  newsId: 'titulo-6',
}

const otherArticles: IBlogArticleCard[] = [...Array(2)].map(() => articleA)

const ebookA: IBlogEbookCard = {
  title:
    'Data OLX Autos traz perspectivas do setor automotivo no encerramento do ano',
  buttonTitle: 'Imóveis',
  description: 'Descrição resumida do e-book',
  ebookId: 'ebook-1',
}

const otherEbooks: IBlogEbookCard[] = [...Array(2)].map(() => ebookA)

const categoriesTags = ['Gestão e relacionamento', 'Na prática']

const postSocialMedia: IPostBlogSocialMedia[] = [
  {
    path: mdiLink,
    link: 'https://www.google.com',
    iconClassName: '-rotate-45',
  },
  {
    path: mdiLinkedin,
    link: 'https://www.google.com',
  },
  {
    path: mdiTwitter,
    link: 'https://www.google.com',
  },
  {
    path: mdiFacebook,
    link: 'https://www.google.com',
  },
]

const AutosPostIdPage = async ({
  params,
}: IPostIdPageParams): Promise<JSX.Element> => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  console.log((await params).postId)

  return (
    <main>
      <section
        className={'wrapperContainer max-w-container1328 flex flex-col gap-8'}
      >
        <PostBlogInitialInfo
          {...{
            categoriesTags,
            title:
              'Como vender um carro financiado? Veja os 7 principais passos',
            team: 'Por Equipe OLX',
            date: '22 de Janeiro de 2021',
            readTime: '5min',
            subtitle: `Especialista esclarece dúvidas sobre o uso de gasolina premium em
              veículos importados e explica conceitos como octanagem e pré-ignição`,
            postSocialMedia,
            tailwindBackgroundImageClassName:
              "bg-[url('https://inglesinstrumentalonline.com.br/wp-content/uploads/2017/06/8-dicas-para-fazer-um-artigo-cientifico-incrivel.jpeg')]",
          }}
        />
        <PostBlogIntro
          articleDetails={articleDetails}
          otherArticles={otherArticles}
          otherEbooks={otherEbooks}
        />
      </section>
      <BlogSubscribe />
      <PostBlogFlowCard />
    </main>
  )
}

export default AutosPostIdPage
