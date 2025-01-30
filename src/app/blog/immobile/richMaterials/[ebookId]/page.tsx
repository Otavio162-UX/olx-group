import { BlogReceiveOurNews } from '@/components/blog/templates/BlogReceiveOurNews'
import { RichMaterialsBlogEbookInfo } from '@/components/blog/templates/RichMaterialsBlog/RichMaterialsBlogEbookInfo'
import { RichMaterialsBlogPresentation } from '@/components/blog/templates/RichMaterialsBlog/RichMaterialsBlogPresentation'

const ImmobileRichMaterialsEbookId = (): JSX.Element => {
  return (
    <main>
      <RichMaterialsBlogPresentation />
      <RichMaterialsBlogEbookInfo />
      <section className="wrapperContainer max-w-container1328">
        <BlogReceiveOurNews />
      </section>
    </main>
  )
}

export default ImmobileRichMaterialsEbookId
