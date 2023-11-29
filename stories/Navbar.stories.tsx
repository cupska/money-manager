import { Meta, StoryObj } from "@storybook/react"
import { Navbar } from "../components/ui/Navbar"
// import { tabs } from "@/general/arrayShared"; 👈 url direktori kayak gini ngga bisa
import { tabs } from "../general/arrayShared" // 👈❤️ bisanya kayak gini
import { mobileViewport } from "./storiesMisc"
const meta: Meta<typeof Navbar> = {
  title: "UIs/Navbar",
  component: Navbar,
}
export default meta

export const Primary: StoryObj<typeof Navbar> = {
  args: {},
  parameters: {
    ...mobileViewport,
  },
}
