// import { OrderTypeOpts, PrismaClient } from "@prisma/client"
// import { ListItem } from "../transaction/ListItem"
// import { MoneyLabel } from "@/components/ui/MoneyLabel"
// import { IoEllipsisHorizontal } from "react-icons/io5"
// import { ComponentProps } from "react"
// import Link from "next/link"

// const getData = async () => {
//   const akun = new PrismaClient().userAccount.findMany()
//   const accAset: {
//     label: string
//     value: string
//     type: ComponentProps<typeof MoneyLabel>["useFor"]
//   }[] = [
//     {
//       label: "Aset Bersih",
//       type: "NONE",
//       value: "2000000",
//     },
//     {
//       label: "Total Pengeluaran",
//       type: "EXPENSE",
//       value: "10000000",
//     },
//     {
//       label: "Total Pemasukan",
//       type: "INCOME",
//       value: "4200000",
//     },
//   ]
//   return { akun, accAset }
// }

// export default async function Account() {
//   const { akun, accAset } = await getData()

//   return (
//     <>
//       <div className=" grid grid-cols-2">
//         {accAset.map((aset, i) => (
//           <li
//             key={i}
//             className={
//               " list-none grid place-items-center " +
//               (i == 0 && " grid place-items-center col-span-2")
//             }
//           >
//             <div>{aset.label}</div>
//             <div>
//               <MoneyLabel
//                 useFor={aset.type}
//                 value={aset.value}
//               />
//             </div>
//           </li>
//         ))}
//       </div>
//       <div className=" px-4">
//         <span className="">Rekening</span>
//         {(await akun).map((akun) => (
//           <li
//             key={akun.id}
//             className=" list-none"
//           >
//             <ListItem
//               icon={akun.icon}
//               subTitle={
//                 <span>
//                   <MoneyLabel
//                     value={String(akun.saldo)}
//                     useFor={"NONE"}
//                   />
//                 </span>
//               }
//               rightItem={<IoEllipsisHorizontal />}
//               id={akun.id}
//               title={akun.name}
//             />
//           </li>
//         ))}
//       </div>
//       <Link
//         href={"#"}
//         className=" m-auto text-blue-500 text-sm flex w-fit underline underline-offset-3 "
//       >
//         Tambah rekening
//       </Link>
//     </>
//   )
// }
