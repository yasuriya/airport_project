import { useState } from 'react'
import moment from 'moment'
import classNames from 'classnames'
import { formatDate } from '../helpers/utils'
import { v4 as uuidv4 } from 'uuid'
import { useSearchParams } from 'react-router-dom'
import PropTypes from 'prop-types'

const DATE_OPTIONS = [
  { day: 'yesterday', format: moment().subtract(1, 'days') },
  { day: 'today', format: moment() },
  { day: 'tomorrow', format: moment().add(1, 'days') },
]

function DatePicker({ queryParams }) {
  const [currentDate, setCurrentDate] = useState('23/02')
  const [, setSearchParams] = useSearchParams()
  const { dateQuery, searchQuery } = queryParams

  const handleDatePicker = (e) => {
    const params = { date: e.target.value }
    if (searchQuery) params.search = searchQuery
    setSearchParams(params)

    setCurrentDate(formatDate(moment(params.date)))
  }

  const handleDateNavigation = (date) => {
    setSearchParams({ date: moment(date).format('YYYY-MM-DD') })
    setCurrentDate(formatDate(moment(date)))
  }

  const handleClassName = (day, date) =>
    classNames('date__item', `date__item_${day}`, {
      'active-day': currentDate === formatDate(date),
    })

  return (
    <div className="search-results__datepicker">
      <form>
        <div className="search-results__label">{currentDate}</div>
        <i className="fa-solid fa-calendar-days"></i>
        <input
          type="date"
          className="search-results__calendar"
          value={dateQuery}
          onChange={handleDatePicker}
        />
      </form>
      <div className="search-results__dates">
        {DATE_OPTIONS.map(({ day, format }) => (
          <div
            key={uuidv4()}
            className={handleClassName(day, format)}
            onClick={() => handleDateNavigation(format)}>
            <div className="date__number">{formatDate(format)}</div>
            <div className="date__tile">{day}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DatePicker

DatePicker.propTypes = {
  queryParams: PropTypes.object.isRequired,
}
