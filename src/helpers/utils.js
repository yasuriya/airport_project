import moment from 'moment'

const DEFAULT_DATE = '2022-02-23'

export const getQueryParams = (query) => ({
  dateQuery: query.get('date') || DEFAULT_DATE,
  searchQuery: query.get('search') || '',
})

export const filterFlights = (arr, queryParams) => {
  const { searchQuery, dateQuery } = queryParams

  return arr
    ?.filter(
      (el, index, array) =>
        index ===
        array.findIndex(
          (item) =>
            item.flightNo === el.flightNo &&
            moment(item?.localTime).format('YYYY-MM-DD') === dateQuery,
        ),
    )
    .filter(
      (el) =>
        el.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        el.flightNo.includes(searchQuery) ||
        el.airlineName.toLowerCase().includes(searchQuery.toLowerCase()),
    )
}

export const formatDate = (date) => date.format('DD/MM')
export const formatTime = (item) => moment(item).format('HH:mm')
export const formatYear = (date) => moment(date).format('YYYY-MM-DD')

export const getFlightInfo = (data, location) => {
  let extractedData
  if (location.pathname === '/departures') extractedData = data?.departure
  if (location.pathname === '/arrivals') extractedData = data?.arrival

  return extractedData?.map((el) => ({
    terminal: el.term,
    localTime: el.timeArrExpectCalc || el.timeDepExpectCalc,
    destination: el['airportFromID.city_en'] || el['airportToID.city_en'],
    status:
      location.pathname === '/departures'
        ? `Departed at ${formatTime(el.timeDepFact)}`
        : `Arrived at ${formatTime(el.timeTakeofFact)}`,

    logo: el.airline.en.logoSmallName,
    airlineName: el.airline.en.name,
    flightNo: el.codeShareData[0].codeShare,
  }))
}

export const navLinkClassToggler = (info, isActive) =>
  isActive ? `nav-link nav-link_${info} active` : `nav-link nav-link_${info}`
