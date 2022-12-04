import FlightNavigation from "./components/FlightNavigation"
import SearchBar from "./components/SearchBar"
import FlightsBoard from "./components/FlightsBoard"

function App() {
  return (
    <main className="App">
      <SearchBar />
      <FlightNavigation />
      <FlightsBoard />
    </main>
  )
}

export default App
