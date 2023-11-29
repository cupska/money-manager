import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

export function GET(req: NextRequest) {
    const dateReq= req.nextUrl.searchParams.get("date") 
    const date = new Date(dateReq)
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
}
