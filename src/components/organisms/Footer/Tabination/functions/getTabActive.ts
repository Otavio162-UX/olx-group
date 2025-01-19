interface IGetTabActive {
  children: JSX.Element | JSX.Element[]
  index: number
}

export const getTabActive = ({ children, index }: IGetTabActive) => {
  if (!children) return 'Children not found'

  const isArray = Array.isArray(children)

  if (isArray) {
    return children[index] || 'Children not found'
  }

  return children
}
