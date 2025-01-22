import { HomeBusinessFront } from '@/components/main/templates/Home/HomeBusinessFront'
import { HomeOlxGroup } from '@/components/main/templates/Home/HomeOlxGroup'
import { HomeOnTopNews } from '@/components/main/templates/Home/HomeOnTopNews'
import { HomeOurEvents } from '@/components/main/templates/Home/HomeOurEvents'
import { HomeSlide } from '@/components/main/templates/Home/HomeSlide'

const Home = (): JSX.Element => {
  return (
    <main className="w-full">
      <HomeSlide />
      <section className="wrapperContainer max-w-container1376">
        <HomeOlxGroup />
        <HomeBusinessFront />
        <HomeOurEvents />
        <HomeOnTopNews />
      </section>
    </main>
  )
}

export default Home
