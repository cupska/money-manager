import { navbarData } from "@/general/datas"
import Link from "next/link"
import { HiOutlinePlus } from "react-icons/hi"

export function Navbar() {
  // const pathname = usePathname()
  return (
    <nav className=" block w-full border border-t relative">
      <button className=" absolute right-1/2 translate-x-1/2 top-0 grid place-items-center -translate-y-1/2 w-14 h-14 bg-orange-500 rounded-full shadow-xl">
        <span className=" text-xl text-white font-extrabold ">
          <HiOutlinePlus />
        </span>
      </button>
      <ul className=" flex ">
        {navbarData.map((tab, i) => {
          return (
            <li
              key={i}
              className=" flex-1"
            >
              <Link
                href={tab.url}
                replace
                className={
                  " flex flex-col [&>*]:text-gray-400 py-4 hover:bg-gray-100  [&>*]:hover:text-orange-500 items-center"
                }
              >
                <span>{tab.icon}</span>
                <span className=" text-xs capitalize">{tab.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
