import { Meta, StoryObj } from "@storybook/react"
import { ListItemV1 } from "../components/UIs/ListItem"
const meta: Meta = {
  title: "UIs/ListItem",
  component: ListItemV1,
}
export default meta

export const Mobile: StoryObj<typeof ListItemV1> = {
  args: { subTitle: "Cash", title: "Food", icon: "" },
}
