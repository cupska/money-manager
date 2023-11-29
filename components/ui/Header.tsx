import { IoMenu, IoNotificationsOutline } from "react-icons/io5"

export const Header = () => (
  <header className=" flex justify-between w-full p-4 [&>*]:text-2xl">
    <IoMenu />
    <IoNotificationsOutline />
  </header>
)
