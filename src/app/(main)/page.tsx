import { Button } from '@/components/generic/atoms/Button'

const Home = (): JSX.Element => {
  return (
    <main className="wrapperContainer max-w-container1328">
      <Button variant="primary" size="small" loading>
        Primary
      </Button>
    </main>
  )
}

export default Home
