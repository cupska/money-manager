import { OrderTypeOpts, UserSetting } from "@prisma/client"
import { HTMLAttributes, HTMLProps, ReactNode } from "react"

export const MoneyLabel = ({
  useFor = "NONE",
  currencyPosition = "AtStart",
  currencySign = "IDR",
  decimalPlaces = 0,
  value = "0",
  customPrefix = "",
}: {
  useFor: OrderTypeOpts | "NONE"
  customPrefix?: ReactNode
  value: string
} & Partial<Omit<UserSetting, "id">>) => {
  return (
    <span
      className={
        useFor == "EXPENSE"
          ? " text-red-500"
          : useFor == "INCOME"
          ? " text-green-500"
          : useFor == "TRANSFER"
          ? " text-blue-500"
          : ""
      }
    >
      {customPrefix} {useFor === "EXPENSE" && "-"} {currencySign} {value}
    </span>
  )
}
