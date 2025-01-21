import { HomeBusinessFront } from '@/components/main/templates/Home/HomeBusinessFront'
import { HomeOlxGroup } from '@/components/main/templates/Home/HomeOlxGroup'
import { HomeOurEvents } from '@/components/main/templates/Home/HomeOurEvents'
import { HomeStayOnTopNews } from '@/components/main/templates/Home/HomeStayOnTopNews'

const Home = (): JSX.Element => {
  return (
    <main>
      <section className="wrapperContainer max-w-container1376">
        <HomeOlxGroup />
        <HomeBusinessFront />
        <HomeOurEvents />
        <HomeStayOnTopNews />
      </section>
    </main>
  )
}

export default Home
