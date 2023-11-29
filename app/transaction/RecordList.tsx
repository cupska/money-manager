import { PrismaClient } from "@prisma/client"
import moment from "moment"
import { ListItem } from "./ListItem"
import { MoneyLabel } from "@/components/ui/MoneyLabel"

const getData = async (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const from = new Date(`${year}-${month}-01T00:00:00Z`)
  const to = new Date(
    `${month != 12 ? year : year + 1}-${
      month != 12 ? month + 1 : 1
    }-01T00:00:00Z`
  )
  const data = await new PrismaClient().userRecord.findMany({
    where: {
      createAt: {
        gte: from, // Mulai dari awal November
        lt: to, // Sebelum awal Desember
      },
    },
    select: {
      category: true,
      id: true,
      value: true,
      account: {
        select: {
          name: true,
        },
      },
      orderType: true,
      createAt: true,
    },
  })
  return data.reduce((acc: Record<string, (typeof data)[0][]>, curr) => {
    const byDate = moment(curr.createAt).format("YYYY MMM DD, dddd")
    if (!acc[byDate]) {
      acc[byDate] = []
    }
    acc[byDate].push(curr)
    return acc
  }, {})
}

export async function RecordList() {
  const today = new Date()
  let period = new Date(today)

  const data = await getData(period)
  return (
    <>
      {Object.keys(data).map((key) => (
        <div key={key}>
          <div>{key.slice(4)}</div>
          {data[key].map((item) => {
            return (
              <li key={item.id}>
                <ListItem
                  id={item.id}
                  icon={item.category.icon}
                  title={item.category.name}
                  subTitle={item.account.name}
                  rightItem={
                    <span>
                      <MoneyLabel
                        value={String(item.value)}
                        useFor={item.orderType}
                      />
                    </span>
                  }
                />
              </li>
            )
          })}
        </div>
      ))}
    </>
  )
}
