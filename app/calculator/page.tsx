"use client"

import { OrderTypeOpts } from "@prisma/client"
import { useState } from "react"

export default function Calculator() {
  const [currOrder, setCurrOrder] = useState<OrderTypeOpts>(
    OrderTypeOpts.EXPENSE
  )
  return (
    <>
      <div className=" pt-52"></div>
      <section className=" w-full flex justify-around">
        {[
          [OrderTypeOpts.INCOME, "green"],
          [OrderTypeOpts.EXPENSE, "red"],
          [OrderTypeOpts.TRANSFER, "blue"],
        ].map(([order, color], i) => (
          <button
            type="button"
            onClick={() => setCurrOrder(order as OrderTypeOpts)}
            className={
              " capitalize font-medium duration-1000 " +
              (order == currOrder ? ` text-${color}-500` : " text-gray-400")
            }
            key={i}
          >
            {order}
          </button>
        ))}
      </section>
      <section className=" flex justify-evenly ">
        {[
          ["Akun", "Pilih akun"],
          ["Kategori", "Pilih kategori"],
        ].map(([judul, inputBtn], i) => (
          <div
            key={i}
            className=" flex flex-col items-center"
          >
            <span className=" text-sm">{judul}</span>
            <button
              type="button"
              className=" border rounded-lg px-4 py-2"
            >
              {inputBtn}
            </button>
          </div>
        ))}
      </section>
      <div
        id="CalcNum"
        className=" grid grid-cols-4  [&>*]:border [&>*]:border-collapse [&>*]:text-center  "
      >
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>0</span>
        <span>.</span>
        <span className=" order-first">+</span>
        <span className=" order-[5]">-</span>
        <span className=" order-[9]">x</span>
        <span className=" order-[13]">÷</span>
        <span>=</span>
      </div>
    </>
  )
}
