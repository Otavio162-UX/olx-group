import { IInputFull } from '@/components/generic/molecules/InputFull/InputFull.interface'
import { justLettersAndSpacesFormat } from '@/utils/format'
import { Dispatch, SetStateAction } from 'react'
import { IErrorStateEbookForm } from '../RichMaterialsBlogEbookForm.interface'

interface IGenerateInputsToEbookForm {
  name: string
  setName: Dispatch<SetStateAction<string>>
  email: string
  setEmail: Dispatch<SetStateAction<string>>
  organization: string
  setOrganization: Dispatch<SetStateAction<string>>
  error: IErrorStateEbookForm
}

export const generateInputsToEbookForm = ({
  name,
  setName,
  email,
  setEmail,
  organization,
  setOrganization,
  error,
}: IGenerateInputsToEbookForm): IInputFull[] => {
  return [
    {
      id: 'name',
      label: 'Nome completo*',
      placeholder: 'Digite seu nome',
      value: name,
      onChange: ({ target: { value } }) =>
        setName(justLettersAndSpacesFormat(value)),
      message: error.name,
      minLength: 6,
      maxLength: 100,
      required: true,
    },
    {
      id: 'email',
      label: 'E-mail*',
      placeholder: 'Digite seu e-mail',
      value: email,
      onChange: ({ target: { value } }) => setEmail(value),
      message: error.email,
      minLength: 8,
      maxLength: 100,
      required: true,
    },
    {
      id: 'organization',
      label: 'Organização',
      placeholder: 'Digite sua organização',
      value: organization,
      onChange: ({ target: { value } }) => setOrganization(value),
      message: error.organization,
      minLength: 3,
      maxLength: 100,
    },
  ]
}
