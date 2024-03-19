import { CSSProperties } from "react"

export interface props {
  FontColor: CSSProperties["backgroundColor"]
  CalenderLogoColor: CSSProperties["backgroundColor"]
  borderColor: CSSProperties["backgroundColor"]
  width: CSSProperties["width"]
  calenderSize: number
  borderWidth: number
  focusBorderColor: CSSProperties["backgroundColor"]
  calenderFontColor: CSSProperties["backgroundColor"]
  currentDayIndicatorCOlor: CSSProperties["backgroundColor"]
  yearRange?: {
    startYear: number
    endYear: number
  }
  onChange: (value: string) => void
  clockFontColor: CSSProperties["backgroundColor"]
  clockPointerColor: CSSProperties["backgroundColor"]
  popUpBackgroundColor: CSSProperties["backgroundColor"]
  selectedFontColor: CSSProperties["backgroundColor"]
  defaultDate: {
    date: string
    month: string
    year: string
    hour: string
    minutes: string
    timeRange: "am" | "pm"
  }
  mode: "time picker" | "date picker" | "date time picker"
  focusCalenderColor: CSSProperties["backgroundColor"]
  paddingBlock: CSSProperties["paddingBlock"]
  arrowsColor: CSSProperties["backgroundColor"]
}

export interface extraContext {
  setDateStr: React.Dispatch<
    React.SetStateAction<{
      date: string
      month: string
      year: string
      hour: string
      minutes: string
      timeRange: string
    }>
  >
  setShowClock: React.Dispatch<React.SetStateAction<boolean>>
  dateStr: {
    date: string
    month: string
    year: string
    hour: string
    minutes: string
    timeRange: string
  }
  changeDate: (
    key: "date" | "hour" | "minutes" | "timeRange" | "year" | "month",
    value: string
  ) => void
  handleOutClose: (e: any) => void
  clos: boolean
  setClose: React.Dispatch<boolean>
}
