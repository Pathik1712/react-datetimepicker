import { StoryFn, Meta } from "@storybook/react"
import { DateTimePicker } from "./DateTimePicker"

export default {
  title: "ReactComponentLibrary/Rating",
  component: DateTimePicker,
} as Meta<typeof DateTimePicker>

const Template: StoryFn<typeof DateTimePicker> = (args) => (
  <DateTimePicker {...(args as Record<any, any>)} />
)

export const RatingTest = Template.bind({})
RatingTest.args = {
  focusBorderColor: "hotpink",
  // maxDate: {
  //   date: 17,
  //   month: 6,
  //   year: 2024,
  // },
  // defaultDate: {
  //   date: "31",
  //   hour: "2",
  //   minutes: "45",
  //   month: "8",
  //   year: "2024",
  //   timeRange: "am",
  // },
  // mode: "time picker",
}
