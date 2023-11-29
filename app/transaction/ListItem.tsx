import { ReactNode } from "react"

export const ListItem = ({
  icon,
  id,
  subTitle,
  title,
  rightItem,
}: {
  rightItem: ReactNode
  id: unknown
  icon: ReactNode
  title: string
  subTitle: string | ReactNode
}) => (
  <div className=" flex items-center p-4 shadow-md">
    <div className="">
      <div className=" overflow-hidden w-10 h-10 rounded-full bg-gray-400">
        {icon}
      </div>
    </div>
    <div className=" ml-4">
      <div className=" capitalize font-medium">{title}</div>
      <div className=" text-xs text-gray-500">{subTitle}</div>
    </div>
    <div className=" ml-auto">{rightItem}</div>
  </div>
)
