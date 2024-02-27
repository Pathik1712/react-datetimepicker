import { StoryFn, Meta } from "@storybook/react"
import DateTimePicker from "./DateTimePicker"

export default {
  title: "ReactComponentLibrary/Rating",
  component: DateTimePicker,
} as Meta<typeof DateTimePicker>

const Template: StoryFn<typeof DateTimePicker> = (args) => (
  <DateTimePicker {...(args as Record<any, any>)} />
)

export const RatingTest = Template.bind({})
RatingTest.args = {
  title: "Default theme",
  theme: "primary",
  testIdPrefix: "rating",
}
