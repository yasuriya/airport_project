import moment from "moment"

export const fn = (arr, searchQry, dateQry, city) => {
  const filteredByDate = arr.filter(
    (el, index, array) =>
      index ===
      array.findIndex(
        (item) =>
          item.fltNo === el.fltNo &&
          (moment(item?.timeArrExpectCalc).format("YYYY-MM-DD") ||
            moment(item?.timeDepExpectCalc).format("YYYY-MM-DD")) ===
            dateQry
      )
  )

  return filteredByDate.filter(
    (el) =>
      el[city].toLowerCase().includes(searchQry.toLowerCase()) ||
      el.fltNo.includes(searchQry) ||
      el.airline.en.name
        .toLowerCase()
        .includes(searchQry.toLowerCase())
  )
}

export const formatDate = (date) => date.format("DD/MM")
export const formatTime = (item) => moment(item).format("HH:mm")

export const navLinkClassToggler = (info, isActive) => {
  // console.log(info)

  return isActive
    ? `nav-link nav-link_${info} active`
    : `nav-link nav-link_${info}`
}
