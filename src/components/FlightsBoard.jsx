import DatePicker from "./DatePicker"
import FlightsTable from "./FlightsTable"
import { getQueryParams } from "../helpers/utils"
import { useSearchParams } from "react-router-dom"

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
