import { HomeBlogSubscribeToNewseller } from '@/components/blog/molecules/HomeBlog/HomeBlogSubscribeToNewseller'
import { HomeBlogArticles } from '@/components/blog/templates/HomeBlog/HomeBlogArticles'
import { HomeBlogEbooks } from '@/components/blog/templates/HomeBlog/HomeBlogEbooks'
import { HomeBlogLastNews } from '@/components/blog/templates/HomeBlog/HomeBlogLastNews'
import { HomeBlogSubscribe } from '@/components/blog/templates/HomeBlog/HomeBlogSubscribe'
import { twMerge } from 'tailwind-merge'

const homeBloGallery = {
  newsId: 'titulo-4',
  imageSrc:
    'https://th.bing.com/th/id/R.b664071701d9845ada555238a3712974?rik=V9MUIMA5lqkZMQ&riu=http%3a%2f%2fmirandamoveis.com%2fwp-content%2fuploads%2f2016%2f06%2fIMG_73221.jpg&ehk=Mqi%2bKfmmXDPse6U0fq%2fdsU6W3yDKBT%2bg6AgOp4jeBsg%3d&risl=1&pid=ImgRaw&r=0',
  buttonNewsCategory: 'Carreira',
  readTime: 'Leitura de 5 min',
  newsTitle:
    'Novembro é o mês ideal para investir em imóveis? Descubra as oportunidades deste mês',
  newsDescription: 'Descrição do blog vai aqui',
}

const homeBlogGalleryProps = [homeBloGallery, homeBloGallery, homeBloGallery]

const BlogAutosPage = () => {
  return (
    <main>
      <section
        className={twMerge('wrapperContainer max-w-container1328', 'lg:pb-7')}
      >
        <HomeBlogLastNews
          title={'As últimas notícias do mercado automotivo'}
          subtitle={'Fique por dentro das novidades do mundo imobiliário.'}
          homeBlogNewsGallery={homeBlogGalleryProps}
        />
        <HomeBlogArticles />
        <HomeBlogEbooks />
      </section>
      <HomeBlogSubscribe />

      <HomeBlogSubscribeToNewseller />
    </main>
  )
}

export default BlogAutosPage
