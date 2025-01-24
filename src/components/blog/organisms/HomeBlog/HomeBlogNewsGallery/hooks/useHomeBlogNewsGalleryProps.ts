import { IHomeBlogMainGalleryCard } from '@/components/blog/molecules/HomeBlog/HomeBlogMainGalleryCard/HomeBlogMainGalleryCard.interface'

const homeBloGallery = {
  link: '/',
  imageSrc:
    'https://th.bing.com/th/id/R.b664071701d9845ada555238a3712974?rik=V9MUIMA5lqkZMQ&riu=http%3a%2f%2fmirandamoveis.com%2fwp-content%2fuploads%2f2016%2f06%2fIMG_73221.jpg&ehk=Mqi%2bKfmmXDPse6U0fq%2fdsU6W3yDKBT%2bg6AgOp4jeBsg%3d&risl=1&pid=ImgRaw&r=0',
  buttonNewsCategory: 'Carreira',
  readTime: 'Leitura de 5 min',
  newsTitle:
    'Novembro é o mês ideal para investir em imóveis? Descubra as oportunidades deste mês',
  newsDescription: 'Descrição do blog vai aqui',
}

const homeBlogGalleryProps = [homeBloGallery, homeBloGallery, homeBloGallery]

export const useHomeBlogNewsGalleryProps = (): IHomeBlogMainGalleryCard[] => {
  return homeBlogGalleryProps
}
