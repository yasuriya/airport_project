function Arrivals({ flights }) {
  //   console.log(flights);

  //   if (!flights) return null;
  return (
    <ul>
      {flights?.body?.arrival.map((el) => {
        return <li>{el["airportFromID.city_en"]}</li>;
      })}
    </ul>
  );
}

export default Arrivals;
