import DatePicker from './DatePicker'
import { useSearchParams } from 'react-router-dom'
import { getQueryParams } from '../helpers/utils'
import FlightsTable from './FlightsTable'
import { QueryParams } from '../types'

const FlightsBoard = (): JSX.Element => {
  const [searchParams]: [URLSearchParams, Function] = useSearchParams()
  const queryParams: QueryParams = getQueryParams(searchParams)

  return (
    <section className="search-results__container">
      <DatePicker {...queryParams} />
      <FlightsTable {...queryParams} />
    </section>
  )
}

export default FlightsBoard
