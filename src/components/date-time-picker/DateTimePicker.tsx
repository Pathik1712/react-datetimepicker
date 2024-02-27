import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import "./datetimepicker.css"
import CalenderSvg from "../../svg/Calender"
import dayjs from "dayjs"
import Arrow from "../../svg/Arrow.svg"
import Expand from "../../svg/Expand"
import { getMonth } from "../../func/month"

const date = dayjs()

type props = {
  FontColor: CSSProperties["backgroundColor"]
  CalenderLogoColor: CSSProperties["backgroundColor"]
  borderColor: CSSProperties["backgroundColor"]
  width: CSSProperties["width"]
  calenderSize: number
  borderWidth: number
  focusBorderColor: CSSProperties["backgroundColor"]
  calenderFontColor: CSSProperties["backgroundColor"]
  currentDayIndicatorCOlor: CSSProperties["backgroundColor"]
  yearSelectorBackgroundColor: CSSProperties["backgroundColor"]
}

const DateTimePicker = ({
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
}: Partial<props>) => {
  const ref = useRef<HTMLDivElement>(null)

  const [open, setOpen] = useState(false)

  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [])
  const handleClose = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("click", handleClose)
    return () => document.removeEventListener("click", handleClose)
  }, [])

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
      <p>DD/MM/YYYY hh/mm aa</p>
      <CalenderSvg
        height={calenderSize}
        color={CalenderLogoColor}
      />
      <Calender
        open={open}
        color={calenderFontColor}
        currentDay={currentDayIndicatorCOlor}
        calenderFontColor={calenderFontColor}
        yearSelectorBackgroundColor={yearSelectorBackgroundColor}
      />
    </div>
  )
}

export default DateTimePicker

const Calender = ({
  open,
  color,
  currentDay,
  calenderFontColor,
  yearSelectorBackgroundColor,
}: {
  open: boolean
  color: string
  currentDay: string
  calenderFontColor: string
  yearSelectorBackgroundColor: string
}) => {
  const [show, setShow] = useState(false)
  const [month, setMonth] = useState<{
    month: number
    year: number
    date: number
    dayList: any[]
  }>(() => ({
    month: date.month(),
    year: date.year(),
    date: date.date(),
    dayList: getMonth({ month: date.month(), year: date.year() }),
  }))
  const [swipeList, setSwipeList] = useState([
    <Grid
      dayList={month.dayList}
      currentDay={currentDay}
      key={`num-1`}
    />,
  ])
  const [last, setLast] = useState<"next" | "prev" | null>(null)

  useEffect(() => {
    if (open) {
      setShow(true)
    }
  }, [open])

  const handleNext = () => {
    if (swipeList.length > 1) {
      return
    }
    const { date: currdate, month: currMonth, year } = month
    const newMonth = date.year(year).month(currMonth).add(1, "month")
    const data = getMonth({ month: newMonth.month(), year: newMonth.year() })
    setMonth({
      month: newMonth.month(),
      year: newMonth.year(),
      date: 1,
      dayList: data,
    })
    const list = [
      ...swipeList,
      <Grid
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
    const data = getMonth({ month: newMonth.month(), year: newMonth.year() })
    setMonth({
      month: newMonth.month(),
      year: newMonth.year(),
      date: 1,
      dayList: data,
    })
    const list = [
      ...swipeList,
      <Grid
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
        style={{ color }}
        onTransitionEnd={() => {
          if (!open) {
            setShow(false)
          }
        }}
      >
        <div className="calender-main">
          <div className="calender-header">
            <h2 style={{ display: "flex", position: "relative" }}>
              {date.year(month.year).month(month.month).format("MMMM YYYY")}
              <YearSelector
                calenderFontColor={calenderFontColor}
                currentYear={month.year}
                yearSelectorBackgroundColor={yearSelectorBackgroundColor}
              />
            </h2>
            <span style={{ display: "flex", gap: 15 }}>
              <button onClick={handlePrev}>
                <img src={Arrow} />
              </button>
              <button onClick={handleNext}>
                <img
                  src={Arrow}
                  style={{ transform: "rotate(180deg)" }}
                />
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
}: {
  dayList: any[]
  currentDay: string
  left?: string
  list?: JSX.Element[]
  setList?: React.Dispatch<React.SetStateAction<JSX.Element[]>>
  position?: "change"
}) => {
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
                i === date.format("MM-DD-YYYY")
                  ? `1px solid ${currentDay}`
                  : "",
              visibility: i == null ? "hidden" : "initial",
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
  calenderFontColor,
  currentYear,
  yearSelectorBackgroundColor,
}: {
  calenderFontColor: string
  currentYear: number
  yearSelectorBackgroundColor: string
}) => {
  const ulRef = useRef<HTMLUListElement>(null)

  const [open, setOpen] = useState(false)

  const yearList = useMemo(() => {
    const startYear = date.year() - 50
    const endYear = date.year() + 50
    return Array.from({ length: endYear - startYear }).map(
      (_, num) => startYear + num
    )
  }, [])
  useEffect(() => {
    if (ulRef.current) {
      const listItem = ulRef.current.querySelector(
        `li:nth-child(${currentYear - 1974})`
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
  }, [open, currentYear])

  return (
    <div className="year-selector-div">
      <div className="year-button">
        <input
          type="checkbox"
          style={{ display: "none" }}
          id="react-datepicker-expand"
        />
        <label
          htmlFor="react-datepicker-expand"
          onClick={(e) => {
            e.stopPropagation()
            setOpen(!open)
          }}
        >
          <Expand />
        </label>
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
            >
              {i}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
