import { HomeMainBusinessFront } from '@/components/main/templates/HomeMain/HomeMainBusinessFront'
import { HomeMainOlxGroup } from '@/components/main/templates/HomeMain/HomeMainOlxGroup'
import { HomeMainOnTopNews } from '@/components/main/templates/HomeMain/HomeMainOnTopNews'
import { HomeMainOurEvents } from '@/components/main/templates/HomeMain/HomeMainOurEvents'
import { HomeMainSlide } from '@/components/main/templates/HomeMain/HomeMainSlide'

const Home = (): JSX.Element => {
  return (
    <main className="w-full">
      <HomeMainSlide />
      <section className="wrapperContainer max-w-container1376">
        <HomeMainOlxGroup />
        <HomeMainBusinessFront />
        <HomeMainOurEvents />
        <HomeMainOnTopNews />
      </section>
    </main>
  )
}

export default Home
