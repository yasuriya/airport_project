import { useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import FlightNavigation from "./FlightNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Arrivals from "./Arrivals";
import Departures from "./Departures";
import NoFlight from "./NoFlight";

const PUBLIC_URL = "https://api.iev.aero/api/flights/23-02-2022";
// const PUBLIC_URL = "https://api.iev.aero/api/flights/2022-02-23";

function TimeTable() {
  const [data, setData] = useState();
  const [searchDate, setSearchDate] = useState("");

  useEffect(() => {
    const fetchApi = () => {
      return fetch(PUBLIC_URL)
        .then((res) => res.json())
        .then((data) => setData(data));
    };

    fetchApi();
  }, [searchDate]);

  console.log(data);
  return (
    <main className="search-results">
      <FlightNavigation />
      <section className="search-results__container">
        <DatePicker searchDate={searchDate} setSearchDate={setSearchDate} />
        {/* <table>
          <thead>
            <tr>
              <th>Terminal</th>
              <th>Local Time</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Airline</th>
              <th>Flight</th>
            </tr>
          </thead>
          <tbody>
            {data?.body?.departure.map((el) => {
              // console.log(new Date(el.timeBoard));
              return (
                <tr>
                  <td>{el.term}</td>
                  <td>
                    {new Date(el.timeBoard).getHours() ||
                      new Date(el.actual).getHours()}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
        <Routes>
          <Route index path="/" element={<Navigate to="/departures" />} />

          <Route path="/departures" element={<Departures flights={data} />} />
          <Route path="/arrivals" element={<Arrivals flights={data} />} />
          <Route path="*" element={<NoFlight />} />
        </Routes>
      </section>
    </main>
  );
}

export default TimeTable;
