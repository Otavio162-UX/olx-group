export type TObjectVariant<T extends string> = {
  [key in T]: string
}

export type TGlobalSizeVariant = 'small' | 'medium' | 'large'
