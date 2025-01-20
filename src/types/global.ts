export type TObjectVariant<T extends string> = {
  [key in T]: string
}

export type TGlobalSizeVariant = 'small' | 'medium' | 'large'

export type TRootLayoutParams = Readonly<{
  children: React.ReactNode
}>
