export interface IPagination {
  page: number
  totalPages: number
  changePage: (newPage: number) => void
  loading: boolean
}
