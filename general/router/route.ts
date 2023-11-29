import { PrismaClient } from "@prisma/client"
import moment from "moment"

const userID = "f41237be-132b-42b3-8867-fa23b0da74a0"
export const api = {
  async records() {
    return await new PrismaClient().userRecord.findMany({
      where: {
        userId: "f41237be-132b-42b3-8867-fa23b0da74a0",
      },
      include: {
        account: {
          select: { name: true },
        },
        category: {
          select: {
            name: true,
            icon: true,
          },
        },
      },
    })
  },
  async userAccounts() {
    return await new PrismaClient().userAccount.findMany({
      where: {
        userId: userID,
      },
    })
  },
  // async recordsfilterByTanggal() {
  //   const getData = await this.records()
  //   moment.locale("id")
  //   return getData.reduce((acc: object[], curr) => {
  //     const tanggal = moment(curr.createAt).format("DD MMM, dddd")
  //     if (!acc[tanggal]) {
  //       acc[tanggal] = []
  //     }
  //     acc[tanggal].push(curr)
  //     return acc
  //   }, [])
  // },
}
