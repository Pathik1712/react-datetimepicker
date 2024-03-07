import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useContext,
} from "react"
import "../datetimepicker.css"
import { calenderContext, extraContext } from "../DateTimePicker"
import dayjs from "dayjs"

const TimePicker = ({ open }: { open: boolean }) => {
  const {
    clockFontColor,
    clockPointerColor,
    dateStr,
    popUpBackgroundColor,
    selectedFontColor,
    setShowClock,
    changeDate,
  } = useContext(calenderContext) as extraContext & Record<any, any>

  const clockRef = useRef<HTMLDivElement>(null)
  const pointerRef = useRef<HTMLDivElement>(null)

  const [clos, setClose] = useState(true)
  const [minutes, setMinutes] = useState(false)
  const [visble, setVisible] = useState(true)
  const [drag, setDrag] = useState(false)

  const renderNumbers = useCallback(() => {
    const numbers = []
    const arr = minutes
      ? [...Array(12)].map((_, num) => num * 5)
      : [...Array(12)].map((_, num) => num + 1)
    const angleNumber = minutes ? 4 : 3
    for (let i = 1; i <= 12; i++) {
      const angle = ((i - angleNumber) * 30 * Math.PI) / 180
      const x = 100 * Math.cos(angle) + 100
      const y = 100 * Math.sin(angle) + 100
      numbers.push(
        <div
          className="hour-clock-numbers"
          key={i}
          style={{
            left: `${x}px`,
            top: `${y}px`,
          }}
        >
          {arr[i - 1]}
        </div>
      )
    }
    return numbers
  }, [minutes])

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const elm = clockRef.current
      if (elm) {
        const position = elm.getBoundingClientRect()
        const x = e.clientX - position.left
        const y = e.clientY - position.top
        const degrees = Math.floor(
          (Math.atan2(y - 100, x - 100) * 180) / Math.PI + 90
        )
        const normalizedDegrees = (degrees + 360) % 360

        if (minutes) {
          const mm = Math.ceil(normalizedDegrees / 6)
          setVisible((mm * 6) % 30 === 0)
          pointerRef.current!.style.transform = `rotate(${
            mm * 6
          }deg) translate(50%, -100%)`
          const minutes = mm % 60 === 0 ? "00" : `${mm}`
          changeDate("minutes", minutes)
        } else {
          const nearestHour = Math.round((normalizedDegrees % 360) / 30) % 12
          pointerRef.current!.style.transform = `rotate(${
            nearestHour * 30
          }deg) translate(50%, -100%)`
          const hour =
            nearestHour === 0
              ? "12"
              : nearestHour < 10
              ? `0${nearestHour}`
              : nearestHour.toString()
          if (dateStr.hour === hour) {
            setMinutes(true)
            return
          }
          changeDate("hour", hour)
        }
      }
    },
    [minutes, dateStr]
  )

  const handleMove = useCallback(
    (e: MouseEvent) => {
      if (minutes && drag) {
        const elm = clockRef.current
        if (elm) {
          const position = elm.getBoundingClientRect()
          const x = e.clientX - position.left
          const y = e.clientY - position.top
          const degrees = Math.floor(
            (Math.atan2(y - 100, x - 100) * 180) / Math.PI + 90
          )
          const normalizedDegrees = (degrees + 360) % 360
          const mm = Math.ceil(normalizedDegrees / 6)
          setVisible((mm * 6) % 30 === 0)
          pointerRef.current!.style.transform = `rotate(${
            mm * 6
          }deg) translate(50%, -100%)`
          const minutes = mm % 60 === 0 ? "00" : `${mm}`
          changeDate("minutes", minutes)
        }
      }
    },
    [drag]
  )

  const handleAmPmChange = useCallback(
    (val: "am" | "pm") => {
      changeDate("timeRange", val)
    },
    [dateStr]
  )

  useEffect(() => {
    clockRef.current?.addEventListener("mousemove", handleMove)
    return () => clockRef.current?.removeEventListener("mousemove", handleMove)
  }, [drag])

  useEffect(() => {
    const h = dateStr?.hour === "hh" ? false : parseInt(dateStr!.hour)
    const m = dateStr?.minutes === "mm" ? false : parseInt(dateStr!.minutes)
    if (!minutes && h) {
      pointerRef.current!.style.transform = `rotate(${
        (h % 12) * 30
      }deg) translate(50%, -100%)`
    } else if (m !== false) {
      setVisible((m * 6) % 30 === 0)
      pointerRef.current!.style.transform = `rotate(${
        m * 6
      }deg) translate(50%, -100%)`
    }
  }, [minutes])

  return (
    clos && (
      <main
        onTransitionEnd={(e) => {
          if (e.target === e.currentTarget) {
            setClose(false)
            setShowClock!(false)
          }
        }}
        className={`hour-clock-container ${!open ? "clock-close" : ""}`}
        style={{ color: clockFontColor, backgroundColor: popUpBackgroundColor }}
      >
        <div
          className="hour-clock"
          onClick={handleClick}
          ref={clockRef}
        >
          {renderNumbers()}
          <div
            style={{ backgroundColor: clockPointerColor }}
            className="clock-pointer"
            ref={pointerRef}
            onMouseDown={(e) => {
              if (!drag && minutes) {
                e.stopPropagation()
                setDrag(true)
                e.currentTarget.style.cursor = "grabbing"
              }
            }}
            onMouseUp={(e) => {
              if (drag && minutes) {
                e.stopPropagation()
                setDrag(false)
                e.currentTarget.style.cursor = "auto"
              }
            }}
            onTransitionEnd={() => {
              setMinutes(true)
            }}
          >
            <span style={{ display: visble ? "initial" : "none" }}></span>
          </div>
        </div>
        <section className="clock-button-container">
          <button
            style={{
              color:
                dateStr.timeRange === "am" ? selectedFontColor : clockFontColor,
              backgroundColor:
                dateStr.timeRange === "am" ? clockPointerColor : "",
            }}
            onClick={() => handleAmPmChange("am")}
          >
            Am
          </button>
          <button
            style={{
              color:
                dateStr.timeRange === "pm" ? selectedFontColor : clockFontColor,
              backgroundColor:
                dateStr.timeRange === "pm" ? clockPointerColor : "",
            }}
            onClick={() => handleAmPmChange("pm")}
          >
            Pm
          </button>
        </section>
      </main>
    )
  )
}

export default TimePicker
