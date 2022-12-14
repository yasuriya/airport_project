import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FlightNavigation from './components/FlightNavigation'
import FlightsBoard from './components/FlightsBoard'

const App: React.FC = () => {
  return (
    <main className="App">
      <Header />
      <SearchBar />
      <FlightNavigation />
      <FlightsBoard />
    </main>
  )
}

export default App
