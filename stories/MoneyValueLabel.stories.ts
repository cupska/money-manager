import { Meta, StoryObj } from "@storybook/react"
import { MoneyValueLabel } from "../components/UIs/MoneyValueLabel"
const meta: Meta = {
  title: "UIs/MoneyValueLabel",
  component: MoneyValueLabel,
}
export default meta

export const Main: StoryObj<typeof MoneyValueLabel> = {
  args: {
    className: " ",
    orderType: "EXPENSE",
    value: 2000000,
  },
}
