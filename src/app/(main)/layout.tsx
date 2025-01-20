import { Footer } from '@/components/main/templates/Footer'
import { Header } from '@/components/main/templates/Header'
import { TRootLayoutParams } from '@/types/global'

const MainLayout = ({ children }: TRootLayoutParams): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
