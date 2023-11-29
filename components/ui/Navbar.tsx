"use client"
import { tabs } from "@/general/arrayShared"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HiOutlinePlus } from "react-icons/hi"

export function Navbar() {
  const pathname = usePathname()
  const navOpts = tabs
  return (
    <nav className=" block w-full border border-t relative">
      <div className=" absolute right-1/2 translate-x-1/2 top-0 -translate-y-1/2 w-fit h-fit bg-orange-500 rounded-full p-5 shadow">
       <button>
        <span className=" text-xl text-white font-extrabold ">
          <HiOutlinePlus />
        </span>
       </button>
      </div>
      <ul className=" flex ">
        {navOpts.map((tab, i) => {
          const isActive = "/" + tab.url == pathname
          return (
            <li
              key={i}
              className=" flex-1"
            >
              <Link
                href={tab.url}
                replace
                className={
                  (isActive && " text-orange-500 ") +
                  " flex flex-col py-4 hover:bg-gray-100 [&>*]:hover:text-orange-500 items-center"
                }
              >
                <span>{tab.icon}</span>
                <span className=" capitalize">{tab.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
