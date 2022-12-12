export type SearchParams = {
  date?: string
  search?: string
}

export type LocationParams = {
  pathname: string
  state: string | null
  search: string
  hash: string
  key: string
}

export type QueryParams = {
  dateQuery: string
  searchQuery: string
}

export type BodyType = {
  arrival: any[]
  departure: any[]
}

export type ExtractedFlights = {
  airlineName: string
  destination: string
  flightNo: string
  localTime: string | Date
  logo: string
  status: string
  terminal: string
}
