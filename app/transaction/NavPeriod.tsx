"use client"
import { ReactNode } from "react"
import { TbSquareRoundedArrowLeft } from "react-icons/tb"

export const NavPeriod = ({ content }: { content: ReactNode }) => {
  return (
    <>
      <div className=" flex items-center justify-evenly">
        <button className=" inline-block">
          <TbSquareRoundedArrowLeft />
        </button>
        {content}
        <button className=" -rotate-180 inline-block">
          <TbSquareRoundedArrowLeft />
        </button>
      </div>
    </>
  )
}
