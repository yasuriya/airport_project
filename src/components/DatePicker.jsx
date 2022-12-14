import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { formatDate, formatYear } from '../helpers/utils'
import classNames from 'classnames'
import moment from 'moment'

const DATE_OPTIONS = [
  { day: 'yesterday', format: moment().subtract(1, 'days') },
  { day: 'today', format: moment() },
  { day: 'tomorrow', format: moment().add(1, 'days') },
]

function DatePicker() {
  const [currentDate, setCurrentDate] = useState('23/02')
  const [searchParams, setSearchParams] = useSearchParams()

  const handleDatePicker = (e) => {
    searchParams.set('date', e.target.value)
    setSearchParams(searchParams)
    setCurrentDate(formatDate(searchParams.get('date')))
  }

  const handleDateNavigation = (date) => {
    setSearchParams({ date: formatYear(date) })
    setCurrentDate(formatDate(date))
  }

  return (
    <div className="search-results__datepicker">
      <form>
        <div className="search-results__label">{currentDate}</div>
        <i className="fa-solid fa-calendar-days"></i>
        <input
          type="date"
          className="search-results__calendar"
          value={searchParams.get('date') || ''}
          onChange={handleDatePicker}
        />
      </form>
      <div className="search-results__dates">
        {DATE_OPTIONS.map(({ day, format }) => (
          <div
            key={uuidv4()}
            className={classNames('date__item', `date__item_${day}`, {
              'active-day': currentDate === formatDate(format),
            })}
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
