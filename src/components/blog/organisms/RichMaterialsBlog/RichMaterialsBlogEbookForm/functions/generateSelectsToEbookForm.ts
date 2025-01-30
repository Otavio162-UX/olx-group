import { ISelectFull } from '@/components/generic/molecules/SelectFull/SelectFull.interface'
import { Dispatch, SetStateAction } from 'react'
import { IErrorStateEbookForm } from '../RichMaterialsBlogEbookForm.interface'

interface IGenerateSelectsToEbookForm {
  position: string
  setPosition: Dispatch<SetStateAction<string>>
  wayOfWorking: string
  setWayOfWorking: Dispatch<SetStateAction<string>>
  error: IErrorStateEbookForm
}

export const generateSelectsToEbookForm = ({
  position,
  setPosition,
  wayOfWorking,
  setWayOfWorking,
  error,
}: IGenerateSelectsToEbookForm): ISelectFull[] => {
  return [
    {
      id: 'position',
      label: 'Selecione o seu cargo*',
      message: error.position,
      value: position,
      onChange: ({ target: { value } }) => setPosition(value),
      options: [{ id: 'Desenvolvedor', label: 'Desenvolvedor' }],
      placeholder: 'Selecione o cargo',
      required: true,
    },
    {
      id: 'wayOfWorking',
      label: 'Selecione a forma de trabalho*',
      message: error.wayOfWorking,
      value: wayOfWorking,
      onChange: ({ target: { value } }) => setWayOfWorking(value),
      options: [{ id: 'diário', label: 'diário' }],
      placeholder: 'Selecione a forma de trabalho',
      required: true,
    },
  ]
}
