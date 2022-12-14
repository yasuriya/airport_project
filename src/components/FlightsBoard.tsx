import DatePicker from './DatePicker'
import FlightsTable from './FlightsTable'

const FlightsBoard: React.FC = () => {
  return (
    <section className="search-results__container">
      <DatePicker />
      <FlightsTable />
    </section>
  )
}

export default FlightsBoard
