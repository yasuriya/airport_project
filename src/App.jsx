import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import FlightNavigation from "./components/FlightNavigation"
import FlightsBoard from "./components/FlightsBoard"

function App() {
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
