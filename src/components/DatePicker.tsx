import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { formatDate, formatYear } from '../helpers/utils'
import classNames from 'classnames'
import moment, { Moment } from 'moment'

type DateOptions = {
  day: string
  format: Moment
}

const DATE_OPTIONS: DateOptions[] = [
  { day: 'yesterday', format: moment().subtract(1, 'days') },
  { day: 'today', format: moment() },
  { day: 'tomorrow', format: moment().add(1, 'days') },
]

const DatePicker: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>('23/02')
  const [searchParams, setSearchParams]: [URLSearchParams, Function] =
    useSearchParams()

  const handleDatePicker: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    searchParams.set('date', e.target.value)
    setSearchParams(searchParams)
    setCurrentDate(formatDate(searchParams.get('date')))
  }

  const handleDateNavigation = (date: Moment): void => {
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
        {DATE_OPTIONS.map(({ day, format }: DateOptions) => (
          <div
            key={uuidv4()}
            className={classNames('date__item', `date__item_${day}`, {
              'active-day': currentDate === formatDate(format),
            })}
            onClick={() => handleDateNavigation(format)}
          >
            <div className="date__number">{formatDate(format)}</div>
            <div className="date__tile">{day}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DatePicker
