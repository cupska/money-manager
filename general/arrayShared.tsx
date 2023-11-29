import React, { ReactNode } from "react"
import { CiWallet } from "react-icons/ci"
import { HiOutlineClipboardList } from "react-icons/hi"
import { HiOutlineCalculator } from "react-icons/hi2"
import { IoBarChartOutline } from "react-icons/io5"

export enum TabsEnum {
  AKUN = "akun",
  TRANSAKSI = "transaksi",
  ANGGARAN = "anggaran",
  ANALISIS = "analisis",
}
export const tabs: {
  label: TabsEnum
  icon: ReactNode
  url: string | URL
}[] = [
  {
    label: TabsEnum.AKUN,
    icon: (
      <span className=" font-black text-lg">
        <CiWallet />
      </span>
    ),
    url: "account",
  },
  {
    label: TabsEnum.TRANSAKSI,
    icon: <HiOutlineClipboardList />,
    url: "transaction",
  },
  {
    icon: <IoBarChartOutline />,
    label: TabsEnum.ANALISIS,
    url: "analytic",
  },
  {
    label: TabsEnum.ANGGARAN,
    icon: <HiOutlineCalculator />,
    url: "budget",
  },
]
