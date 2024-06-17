# React.Date.Time.Calender

---

A date and time picker for your React app

- Pick days,months,years and hours,minutes
- Use date-picker, time-picker or date-time-picker
- No extra dependency like moment.js or day.js needed

---

![sample image 1](https://github.com/pathikcomp/images/assets/150209179/ff71ab9a-bdaa-4a1e-807c-41decf4738c6)

---

![sample image 2](https://github.com/pathikcomp/images/assets/150209179/9f8b4833-8780-4d8c-83cf-1a0175f9693d)

---

## Demo

---

A minimal demo can be found with react.date.time.calender below.

[online demo](https://demo-react-date-time-calender-git-main-pathik1712.vercel.app/)

## Getting Started

---

### Compatibility

Your project needs to use React 18 or later. If you use an older version of React, please refer to the table below to find a suitable React-Date-Picker version.

| React Version | Compatible version of react.date.time.calender |
| ------------- | ---------------------------------------------- |
| >16.3         | latest                                         |

### Installation

Add react.date.time.calender to your project by executing npm install react.date.time.calender.

### Usage

```tsx
import React from "react"
import { DateTimePicker } from "react.date.time.calender"

export default function Home() {
  return (
    <>
      <DateTimePicker />
    </>
  )
}
```

### User Guide

---

| Props Name                  | Description                                                       | Default value   |
| --------------------------- | ----------------------------------------------------------------- | --------------- |
| FontColor                   | text color of fonts in input element                              | gray            |
| styles                      | styles for input element                                          | N/A             |
| maxDate                     | maximum date that user can select                                 | N/A             |
| CalenderLogoColor           | color of calender logo when its not focus                         | gray            |
| focusCalenderColor          | calender logo color when on focus                                 | dodgerblue      |
| borderColor                 | border color of input element when not focus                      | gray            |
| width                       | width of input element                                            | min-content     |
| calenderSize                | size of calender logo inside input element                        | 25 px           |
| borderWidth                 | border width of input element                                     | 1px             |
| focusBorderColor            | border color of input element when its on focus                   | dodgerblue      |
| calenderFontColor           | text color of fonts in calender                                   | dodgerblue      |
| currentDayIndicatorCOlor    | border color of current day indicator                             | gray            |
| selectedFontColor           | font color of selected day in calender                            | dodgerblue      |
| yearSelectorBackgroundColor | background color of year selector pop up                          | white           |
| yearRange                   | year range from start year to end year                            | 1950 to 2100    |
| onChange                    | gives date time in string                                         | n/a             |
| clockFontColor              | text color of fonts in clock                                      | gray            |
| clockPointerColor           | color of pointer in clock                                         | dodgerblue      |
| popUpBackgroundColor        | background color of calender and clock popup                      | inherit         |
| defaultDate                 | default selected date in and time in calender                     | n/a             |
| mode                        | for using date picker or time picker or both date end time picker | ate time picker |
| paddingBlock                | padding block of input element                                    | 15 px           |
| arrowsColor                 | color of all arrows inside calender                               | gray            |

### License

The MIT License

---

### Author

Pathik Chauhan
