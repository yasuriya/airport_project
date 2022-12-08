import DatePicker from './DatePicker'
import { useSearchParams } from 'react-router-dom'
import { getQueryParams } from '../helpers/utils'
import FlightsTable from './FlightsTable'

function FlightsBoard() {
  const [searchParams] = useSearchParams()
  const queryParams = getQueryParams(searchParams)
  return (
    <section className="search-results__container">
      <DatePicker queryParams={queryParams} />
      <FlightsTable queryParams={queryParams} />
    </section>
  )
}

export default FlightsBoard
