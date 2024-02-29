import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useContext,
} from "react"
import "../datetimepicker.css"
import { calenderContext } from "../DateTimePicker"

const TimePicker = ({ open }: { open: boolean }) => {
  const {
    clockFontColor,
    clockPointerColor,
    setDateStr,
    dateStr,
    popUpBackgroundColor,
    selectedFontColor,
    setShowClock,
  } = useContext(calenderContext)

  const clockRef = useRef<HTMLDivElement>(null)
  const pointerRef = useRef<HTMLDivElement>(null)

  const [amPm, setAmPm] = useState<"am" | "pm">("am")
  const [clos, setClose] = useState(true)
  const [minutes, setMinutes] = useState(true)

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
        const nearestHour = Math.round((normalizedDegrees % 360) / 30) % 12

        pointerRef.current!.style.transform = `rotate(${
          nearestHour * 30
        }deg) translate(50%, -100%)`
        const str = dateStr?.split(" ")!
        if (minutes) {
          const minutes = nearestHour === 0 ? "00" : `${5 * nearestHour}`
          const hour = str[1].split("/")[0]
          str[1] = hour + "/" + minutes
          console.log(minutes, hour)
          setDateStr!(str.join(" "))
        } else {
          const hour =
            nearestHour === 0
              ? "12"
              : nearestHour < 10
              ? `0${nearestHour}`
              : nearestHour

          str[1] = hour + "/00"
          setDateStr!(str.join(" "))
        }
      }
    },
    []
  )
  const handleAmPmChange = useCallback((val: "am" | "pm") => {
    const str = dateStr?.split(" ")!
    str[2] = val
    setDateStr!(str.join(" "))
    setAmPm(val)
  }, [])
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
          ></div>
        </div>
        <section className="clock-button-container">
          <button
            style={{
              color: amPm === "am" ? selectedFontColor : clockFontColor,
              backgroundColor: amPm === "am" ? clockPointerColor : "",
            }}
            onClick={() => handleAmPmChange("am")}
          >
            Am
          </button>
          <button
            style={{
              color: amPm === "pm" ? selectedFontColor : clockFontColor,
              backgroundColor: amPm === "pm" ? clockPointerColor : "",
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
