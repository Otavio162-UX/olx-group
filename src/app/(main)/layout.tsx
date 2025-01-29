import { FooterMain } from '@/components/main/templates/FooterMain'
import { HeaderMain } from '@/components/main/templates/HeaderMain'
import { TRootLayoutParams } from '@/types/global'

const MainLayout = ({ children }: TRootLayoutParams): JSX.Element => {
  return (
    <>
      <HeaderMain />
      {children}
      <FooterMain />
    </>
  )
}

export default MainLayout
