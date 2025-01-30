import { IErrorStateEbookForm } from '../RichMaterialsBlogEbookForm.interface'

const initialErrorState: IErrorStateEbookForm = {
  name: null,
  email: null,
  organization: null,
  position: null,
  wayOfWorking: null,
}

export const richMaterialsBlogEbookFormProps = {
  initialErrorState,
}
