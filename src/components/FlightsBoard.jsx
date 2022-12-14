import DatePicker from './DatePicker'
import FlightsTable from './FlightsTable'

function FlightsBoard() {
  return (
    <section className="search-results__container">
      <DatePicker />
      <FlightsTable />
    </section>
  )
}

export default FlightsBoard
