import { Button } from '@/components/atoms/Button'

const Home = (): JSX.Element => {
  return (
    <main className="wrapperContainer max-w-container1328">
      <Button variant="danger" size="small" loading>
        Primary
      </Button>
    </main>
  )
}

export default Home
