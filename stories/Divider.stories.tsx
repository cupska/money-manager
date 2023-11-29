import { Meta, Preview, StoryObj } from "@storybook/react"
import { mobileViewport } from "./storiesMisc"
import { DividerV1 } from "../components/UIs/Divider"

const meta: Meta = {
  title: "UIs/Divider",
  component: DividerV1,
}
export default meta
export const primary: StoryObj<typeof DividerV1> = {
  args: {},
}
