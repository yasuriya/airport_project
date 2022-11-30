function Departures({ flights }) {
  //   console.log(flights.body.departure);

  //   if (!flights) return null;
  return (
    <table>
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
        {flights?.body?.departure.map((el) => {
          // console.log(new Date(el.timeBoard));
          return (
            <tr>
              <td>{el.term}</td>
              <td>
                {new Date(el.timeBoard).getHours() ||
                  new Date(el.actual).getHours()}
              </td>
              <td>{el["airportToID.city_en"]}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Departures;
