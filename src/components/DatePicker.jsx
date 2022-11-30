import { useState } from "react";

function DatePicker({ searchDate, setSearchDate }) {
  const [currentDate, setCurrentDate] = useState(
    `${new Date().getDate()}/${new Date().getMonth()}`
  );

  // const handleCalendar = (e) => {
  //   console.log(e.target.value);
  // };

  // console.log(searchDate);

  return (
    <div className="search-results__datepicker">
      <form>
        <div className="search-results__label">{currentDate}</div>
        <i className="fa-solid fa-calendar-days"></i>
        <input
          type="date"
          className="search-results__calendar"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />
      </form>
      <div className="search-results__dates">
        <div className="date-item date-item__yesterday">
          <div className="date-number">
            {new Date().getDate() - 1}/{new Date().getMonth()}
          </div>
          <div className="date-title">Yesterday</div>
        </div>
        <div className="date-item date-item__today active-day">
          <div className="date-number">{currentDate}</div>
          <div className="date-title">today</div>
        </div>
        <div className="date-item date-item__tomorrow">
          <div className="date-number">
            {new Date().getDate() + 1}/{new Date().getMonth()}
          </div>
          <div className="date-title">tomorrow</div>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
