import dayjs from "dayjs"

export const getMonth = ({ month, year }: { month: number; year: number }) => {
  const d = dayjs()
  const currentMonth = d.year(year).month(month)

  const startDay = currentMonth.startOf("month")

  const endDay = currentMonth.endOf("month")

  //   const startRange = currentMonth.startOf("month").subtract(startDay - 1, "day")
  //   const endRange = currentMonth
  //     .endOf("month")
  //     .add(endDay === 0 ? 0 : 7 - endDay, "day")

  let currentDate = startDay
  let arr: any[] = []

  while (currentDate.isBefore(endDay) || currentDate.isSame(endDay)) {
    arr.push(currentDate.format("MM-DD-YYYY"))
    currentDate = currentDate.add(1, "day")
  }
  Array(startDay.day())
    .fill(null)
    .forEach(() => {
      arr = [null, ...arr]
    })
  Array(endDay.day() === 0 ? 0 : 6 - endDay.day())
    .fill(null)
    .forEach(() => arr.push(null))


  return arr
}
