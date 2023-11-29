import { Header } from "@/components/UIs/Header"
import { tabs } from "@/general/arrayShared"
import { Meta, StoryObj } from "@storybook/react"
import { mobileViewport } from "./storiesMisc"

function ExpenseIncomeTotal() {
  return <> </>
}

const meta: Meta = {
  title: "UIs/Header",
  component: ExpenseIncomeTotal,
}
export default meta
export const Mobile: StoryObj<typeof ExpenseIncomeTotal> = {}
