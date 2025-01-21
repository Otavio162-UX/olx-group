import { BusinessFront } from '@/components/main/templates/Home/HomeBusinessFront'
import { HomeOlxGroup } from '@/components/main/templates/Home/HomeOlxGroup'

const Home = (): JSX.Element => {
  return (
    <main>
      <section className="wrapperContainer max-w-container1376">
        <HomeOlxGroup />
        <BusinessFront />
      </section>
    </main>
  )
}

export default Home
