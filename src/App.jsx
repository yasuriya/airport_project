import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FlightNavigation from './components/FlightNavigation'
import FlightsBoard from './components/FlightsBoard'
import Banner from './components/Banner'
function App() {
  return (
    <main className="App">
      <Header />
      <Banner />
      <SearchBar />
      <FlightNavigation />
      <FlightsBoard />
    </main>
  )
}

export default App
