import { CSSProperties } from "react"

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
}

export const DateTimePicker: React.FC<Partial<props>>
