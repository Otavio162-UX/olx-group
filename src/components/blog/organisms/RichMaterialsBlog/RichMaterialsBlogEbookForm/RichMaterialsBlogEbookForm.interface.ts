export interface IErrorStateEbookForm {
  name: string | null
  email: string | null
  organization: string | null
  position: string | null
  wayOfWorking: string | null
}

export interface IZodErrorEbookForm {
  message: string
  path: string[]
}

export interface IRichMaterialsBlogEbookForm {
  ebookName: string
}
