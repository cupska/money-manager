import { TabsEnum, tabs } from "../general/arrayShared"
import { Header } from "../components/UIs/Header"
import { Meta, Preview, StoryObj } from "@storybook/react"
import { mobileViewport } from "./storiesMisc"

const meta: Meta = {
  title: "UIs/Header",
  component: Header,
}
export default meta
export const Mobile: StoryObj<typeof Header> = {
  args: { children: tabs[0].label },
  parameters: {
    ...mobileViewport,
  },
}
