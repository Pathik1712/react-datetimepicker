import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  createContext,
  useContext,
} from "react"
import "./datetimepicker.css"
import CalenderSvg from "../../svg/Calender"
import dayjs from "dayjs"
import Arrow from "../../svg/Arrow"
import Expand from "../../svg/Expand"
import { getMonth } from "../../func/month"
import TimePicker from "./components/TimePicker"
import { props, extraContext } from "./datetimepicker.types"

const date = dayjs()

export const calenderContext = createContext<
  Partial<props> & Partial<extraContext>
>({})

const DateTimePicker: React.FC<Partial<props>> = ({
  FontColor = "gray",
  CalenderLogoColor = "gray",
  borderColor = "gray",
  borderWidth = 1,
  width = "min-content",
  calenderSize = 25,
  focusBorderColor = "dodgerblue",
  calenderFontColor = "dodgerblue",
  currentDayIndicatorCOlor = "gray",
  yearSelectorBackgroundColor = "white",
  yearRange = {
    startYear: 1950,
    endYear: 2100,
  },
  onChange = () => {},
  clockFontColor = "gray",
  clockPointerColor = "dodgerblue",
  selectedFontColor = "white",
  defaultDate,
  mode = "date time picker",
  popUpBackgroundColor = "inherit",
  focusCalenderColor = "dodgerblue",
  paddingBlock = "15px",
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const [open, setOpen] = useState(false)
  const [clos, setClose] = useState(false)

  const [dateStr, setDateStr] = useState(() => {
    if (defaultDate == null) {
      return {
        date: "DD",
        month: "MM",
        year: "YYYY",
        hour: "hh",
        minutes: "mm",
        timeRange: "aa",
      }
    } else {
      const { date: d, hour, minutes, month, year } = defaultDate
      const yy = parseInt(year)
      const mm = parseInt(month)
      const hh = parseInt(hour)
      const mu = parseInt(minutes)
      const dd = parseInt(d)
      if (mode === "date picker" || mode === "date time picker") {
        if (
          year == null ||
          yy < yearRange.startYear ||
          yy > yearRange.endYear
        ) {
          throw Error(
            "Year In defaultDate Must Be Between Year Range. Default Year Range Is 1950 And 2100"
          )
        } else if (mm == null || mm < 1 || mm > 12) {
          throw Error("Month In defaultDate Must Be Between 1 And 12.")
        } else if (
          dd == null ||
          dd < 1 ||
          dd >
            date
              .year(yy)
              .month(mm - 1)
              .endOf("month")
              .date()
        ) {
          throw Error("Date in defaultDate Is Not Valid.")
        }
      }
      if (mode === "time picker" || mode === "date time picker") {
        if (hh < 1 || hh > 12) {
          throw Error("Hour In defaultDate Must Be Between 1 And 12.")
        } else if (mu < 1 || mu > 60) {
          throw Error("Minutes In defaultDate Must Be Between 1 And 60.")
        }
      }
      return defaultDate
    }
  })
  const [showClock, setShowClock] = useState(
    mode === "time picker" ? true : false
  )

  const handleOpen = useCallback(() => {
    setOpen(true)
    if (mode === "date picker") {
      setClose(true)
    }
  }, [])
  const handleClose = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false)
      onChange(getStr())
    }
  }, [])

  const handleOutClose = (e: any) => {
    ;(e as MouseEvent).stopPropagation()
    setOpen(false)
    // onChange(getStr())
  }

  const getStr = useCallback(() => {
    if (mode === "date picker") {
      return `${dateStr.date}/${dateStr.month}/${dateStr.year}`
    } else if (mode === "time picker") {
      return `${dateStr.hour}/${dateStr.minutes} ${dateStr.timeRange}`
    } else {
      return `${dateStr.date}/${dateStr.month}/${dateStr.year} ${dateStr.hour}/${dateStr.minutes} ${dateStr.timeRange}`
    }
  }, [dateStr])

  const changeDate = (
    key: "date" | "hour" | "minutes" | "timeRange" | "year" | "month",
    value: string
  ) => {
    const { date, hour, minutes, month, timeRange, year } = dateStr
    if (key === "date") {
      const dd = (value as string).split("-")
      if (minutes === "mm") {
        setDateStr({
          date: dd[1],
          month: dd[0],
          year: dd[2],
          hour: "12",
          minutes: "00",
          timeRange: "am",
        })
      } else {
        setDateStr({
          ...dateStr,
          date: dd[1],
          month: dd[0],
          year: dd[2],
        })
      }
    } else if (key === "hour") {
      setDateStr({
        ...dateStr,
        hour: value,
      })
    } else if (key === "minutes") {
      setDateStr({
        ...dateStr,
        minutes: value.length !== 1 ? value : "0" + value,
      })
    } else if (key === "timeRange") {
      setDateStr({
        ...dateStr,
        timeRange: value,
      })
    }
  }

  useEffect(() => {
    if (yearRange.endYear < yearRange.startYear) {
      throw Error("start year must be smaller than end Year")
    }
    document.addEventListener("click", handleClose)
    return () => document.removeEventListener("click", handleClose)
  }, [])

  useEffect(() => {
    if (!open) {
      onChange(getStr())
    }
  }, [open])

  return (
    <div
      className="input-div"
      ref={ref}
      onClick={handleOpen}
      style={{
        borderColor: open ? focusBorderColor : borderColor,
        borderWidth,
        width,
        color: FontColor,
      }}
    >
      <p style={{ paddingBlock }}>{getStr()}</p>
      <CalenderSvg
        height={calenderSize}
        color={open ? focusCalenderColor : CalenderLogoColor}
      />
      <calenderContext.Provider
        value={{
          FontColor,
          CalenderLogoColor,
          borderColor,
          borderWidth,
          width,
          calenderSize,
          focusBorderColor,
          calenderFontColor,
          currentDayIndicatorCOlor,
          yearSelectorBackgroundColor,
          setDateStr,
          yearRange,
          setShowClock,
          clockFontColor,
          clockPointerColor,
          dateStr,
          selectedFontColor,
          changeDate,
          handleOutClose,
          mode,
          clos,
          setClose,
          popUpBackgroundColor,
        }}
      >
        {!showClock ? (
          <Calender
            open={open}
            color={calenderFontColor}
            currentDay={currentDayIndicatorCOlor}
          />
        ) : (
          <TimePicker open={open} />
        )}
      </calenderContext.Provider>
    </div>
  )
}

export { DateTimePicker }

const Calender = ({
  open,
  color,
  currentDay,
}: {
  open: boolean
  color: string
  currentDay: string
}) => {
  const { yearRange, popUpBackgroundColor, dateStr, changeDate } = useContext(
    calenderContext
  ) as extraContext & Record<any, any>

  const [show, setShow] = useState(false)
  const [month, setMonth] = useState<{
    month: number
    year: number
    date: string
    dayList: any[]
  }>(() => {
    const m = isNaN(parseInt(dateStr!.month))
      ? date.month()
      : parseInt(dateStr!.month) - 1
    const y = isNaN(parseInt(dateStr!.year))
      ? date.year()
      : parseInt(dateStr!.year)
    const { date: day, month: mm, year: yy } = dateStr!
    const d = (mm + "-" + day + "-" + yy) as string
    const obj = {
      month: m,
      year: y,
      date: dayjs(d).format("MM-DD-YYYY"),
      dayList: getMonth({ month: m, year: y }),
    }
    return obj
  })
  const [swipeList, setSwipeList] = useState([
    <Grid
      handleDayChange={(date: dayjs.Dayjs) => {
        setMonth({
          ...month,
          date: date.format("MM-DD-YYYY"),
        })
        changeDate("date", date.format("MM-DD-YYYY"))
        setSwipeList([
          <Grid
            handleDayChange={handleDayChange}
            selectedDay={date.format("MM-DD-YYYY")}
            currentDay={currentDay}
            dayList={month.dayList}
            key={date.toString()}
            setList={setSwipeList}
            left="0%"
          />,
        ])
      }}
      selectedDay={month.date}
      dayList={month.dayList}
      currentDay={currentDay}
      key={`num-1`}
    />,
  ])
  const [last, setLast] = useState<"next" | "prev" | null>(null)

  const handleYearChange = (year: number) => {
    const { month: currMonth } = month
    const currdate = dayjs(month.date).date()
    if (dateStr.year !== "YYYY") {
      const newMonth = date.year(year).month(currMonth).date(currdate)
      const data = getMonth({ month: newMonth.month(), year: newMonth.year() })

      setMonth({
        ...month,
        year: newMonth.year(),
        dayList: data,
        date: newMonth.format("MM-DD-YYYY"),
      })
      changeDate("date", newMonth.format("MM-DD-YYYY"))
      setSwipeList([
        <Grid
          handleDayChange={handleDayChange}
          selectedDay={newMonth.format("MM-DD-YYYY")}
          currentDay={currentDay}
          dayList={data}
          key={newMonth.toString()}
          position="change"
          setList={setSwipeList}
          left="0%"
        />,
      ])
    } else {
      const newMonth = date.year(year).month(currMonth).date(currdate)
      const data = getMonth({ month: month.month, year: year })
      setMonth({
        ...month,
        year: year,
        dayList: data,
      })
      setSwipeList([
        <Grid
          handleDayChange={handleDayChange}
          selectedDay={month.date}
          currentDay={currentDay}
          dayList={data}
          key={newMonth.toString()}
          position="change"
          setList={setSwipeList}
          left="0%"
        />,
      ])
    }
  }

  const handleDayChange = (date: dayjs.Dayjs) => {
    const dd = date.format("MM-DD-YYYY")
    setMonth({
      ...month,
      date: dd,
      dayList: getMonth({ month: date.month(), year: date.year() }),
    })
    changeDate("date", dd)
    setSwipeList([
      <Grid
        handleDayChange={handleDayChange}
        selectedDay={dd}
        currentDay={currentDay}
        dayList={getMonth({ month: date.month(), year: date.year() })}
        key={date.toString()}
        setList={setSwipeList}
        left="0%"
      />,
    ])
  }

  const handleNext = () => {
    if (swipeList.length > 1) {
      return
    }
    const { date: currdate, month: currMonth, year } = month
    const newMonth = date.year(year).month(currMonth).add(1, "month")
    if (newMonth.year() > yearRange!.endYear) {
      return
    }
    const data = getMonth({ month: newMonth.month(), year: newMonth.year() })
    setMonth({
      ...month,
      month: newMonth.month(),
      year: newMonth.year(),
      dayList: data,
    })
    const list = [
      ...swipeList,
      <Grid
        handleDayChange={handleDayChange}
        selectedDay={currdate}
        currentDay={currentDay}
        dayList={data}
        key={newMonth.toString()}
        position="change"
        setList={setSwipeList}
        left="100%"
      />,
    ]
    setSwipeList(list)
    setLast("next")
  }
  const handlePrev = () => {
    if (swipeList.length > 1) {
      return
    }
    const { date: currdate, month: currMonth, year } = month
    const newMonth = date.year(year).month(currMonth).subtract(1, "month")
    if (newMonth.year() < yearRange!.startYear) {
      return
    }
    const data = getMonth({ month: newMonth.month(), year: newMonth.year() })
    setMonth({
      ...month,
      month: newMonth.month(),
      year: newMonth.year(),
      dayList: data,
    })
    const list = [
      ...swipeList,
      <Grid
        handleDayChange={handleDayChange}
        selectedDay={currdate}
        currentDay={currentDay}
        dayList={data}
        key={newMonth.toString()}
        position="change"
        setList={setSwipeList}
        left="-100%"
      />,
    ]
    setSwipeList(list)
    setLast("prev")
  }

  useEffect(() => {
    if (open) {
      setShow(true)
    }
  }, [open])

  useEffect(() => {
    if (last != null) {
      const list = swipeList.map((i, num) =>
        React.cloneElement(i, {
          left:
            num === swipeList.length - 1
              ? "0%"
              : `${last === "next" ? "-100%" : "100%"}`,
          list: swipeList,
        })
      )
      setSwipeList(list)
      setLast(null)
    }
  }, [swipeList, last])

  return (
    (show || open) && (
      <div
        className={`calender-div ${show && open ? "calender-open" : ""}`}
        style={{ color, backgroundColor: popUpBackgroundColor }}
        onTransitionEnd={() => {
          if (!open) {
            setShow(false)
          }
        }}
      >
        <div className="calender-main">
          <div className="calender-header">
            <h2
              style={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {date.year(month.year).month(month.month).format("MMMM YYYY")}
              <YearSelector
                handleClick={handleYearChange}
                currentYear={month.year}
              />
            </h2>
            <span style={{ display: "flex", gap: 15 }}>
              <button onClick={handlePrev}>
                <Arrow />
              </button>
              <button onClick={handleNext}>
                <Arrow rotate={true} />
              </button>
            </span>
          </div>
          <section className="calender-grid-header">
            {["S", "M", "T", "W", "T", "F", "S"].map((i, num) => (
              <span
                key={`weekname-${num}`}
                style={{ color: "gray" }}
              >
                {i}
              </span>
            ))}
          </section>
          <section className="calender-swipe-container">
            {swipeList.map((i, num) => i)}
          </section>
        </div>
      </div>
    )
  )
}

const Grid = ({
  dayList,
  currentDay,
  left,
  list,
  position,
  setList,
  selectedDay,
  handleDayChange,
}: {
  dayList: any[]
  currentDay: string
  left?: string
  list?: JSX.Element[]
  setList?: React.Dispatch<React.SetStateAction<JSX.Element[]>>
  position?: "change"
  selectedDay: string
  handleDayChange: (date: dayjs.Dayjs) => void
}) => {
  const {
    calenderFontColor,
    selectedFontColor,
    setShowClock,
    mode,
    handleOutClose,
  } = useContext(calenderContext)
  return (
    <div
      className="calender-swipe-item"
      style={{
        transform: `translateX(${left ?? "0%"})`,
      }}
      onTransitionEnd={(e) => {
        if (position != null && setList != null) {
          if (position != null) {
            const arr = list!
              .slice(1)
              .map((i) => React.cloneElement(i, { position: null, left: "0%" }))
            setList(arr)
          }
        }
      }}
    >
      <div className="calender-grid">
        {dayList.map((i, num) => (
          <span
            key={`date-${num}`}
            style={{
              border:
                i === date.format("MM-DD-YYYY") && selectedDay !== i
                  ? `1px solid ${currentDay}`
                  : "",
              visibility: i == null ? "hidden" : "initial",
              backgroundColor: selectedDay === i ? calenderFontColor : "",
              color: selectedDay === i ? selectedFontColor : "",
            }}
            onClick={(e) => {
              e.stopPropagation()
              handleDayChange(dayjs(i))
              if (mode === "date picker") {
                handleOutClose!(e)
              } else {
                setShowClock!(true)
              }
            }}
          >
            {i != null && dayjs(i).date()}
          </span>
        ))}
      </div>
    </div>
  )
}

const YearSelector = ({
  currentYear,
  handleClick,
}: {
  currentYear: number
  handleClick: (year: number) => void
}) => {
  const ulRef = useRef<HTMLUListElement>(null)

  const [open, setOpen] = useState(false)

  const { yearSelectorBackgroundColor, calenderFontColor, yearRange } =
    useContext(calenderContext)

  const yearList = useMemo(() => {
    const { endYear, startYear } = yearRange!
    return Array.from({ length: endYear - startYear + 1 }).map(
      (_, num) => startYear + num
    )
  }, [])
  useEffect(() => {
    if (ulRef.current) {
      const listItem = ulRef.current.querySelector(
        `li:nth-child(${currentYear - yearRange!.startYear})`
      ) as HTMLLIElement
      if (listItem) {
        const ulTop = ulRef.current.offsetTop
        const liTop = listItem.offsetTop

        ulRef.current.scrollTo({
          top: liTop - ulTop,
          behavior: "smooth",
        })
      }
    }
  }, [currentYear])

  return (
    <div className="year-selector-div">
      <div className="year-button">
        <button
          onClick={(e) => {
            setOpen(!open)
          }}
          style={{ transform: `rotate(${!open ? "0deg" : "-180deg"})` }}
        >
          <Expand />
        </button>
      </div>
      <ul
        ref={ulRef}
        className="year-selector-list"
        style={{
          transform: `scale(${!open ? "0%" : "100%"})`,
          backgroundColor: yearSelectorBackgroundColor,
        }}
      >
        {yearList.map((i) => (
          <li key={i}>
            <button
              style={{
                color:
                  i === currentYear
                    ? yearSelectorBackgroundColor
                    : calenderFontColor,
                backgroundColor: i !== currentYear ? "" : calenderFontColor,
              }}
              onClick={() => {
                handleClick(i)
                setOpen(false)
              }}
            >
              {i}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
