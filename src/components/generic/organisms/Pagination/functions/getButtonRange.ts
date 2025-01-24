interface IGetButtonRange {
  currentPage: number
  totalPages: number
}

export const getButtonRange = ({
  currentPage,
  totalPages,
}: IGetButtonRange) => {
  const range = []
  const min = Math.max(1, currentPage - 2)
  const max = Math.min(totalPages, currentPage + 2)

  for (let i = min; i <= max; i++) {
    range.push(i)
  }

  return range
}
