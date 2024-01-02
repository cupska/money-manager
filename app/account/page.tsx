// import { useEffect } from "react"

// export default function Account() {

//     fetch("account/api/tai").then((e)=> e.json().then((a)=> console.log(a)))

//     return (
//         <>
//         <div>
//             <span>awaw</span>
//         </div>
//         </>
//     )
// }
import { OrderTypeOpts, PrismaClient } from "@prisma/client";
import { ListItem } from "../transaction/ListItem";
import { MoneyLabel } from "@/components/ui/MoneyLabel";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { ComponentProps, Suspense } from "react";
import Link from "next/link";
import { Spinner } from "@/components/ui/Spinner";

const getData = async () => {
  const akun = new PrismaClient().userAccount.findMany();
  const accAset: {
    label: string;
    value: string;
    type: ComponentProps<typeof MoneyLabel>["useFor"];
  }[] = [
    {
      label: "Aset Bersih",
      type: "NONE",
      value: "2000000",
    },
    {
      label: "Total Pengeluaran",
      type: "EXPENSE",
      value: "10000000",
    },
    {
      label: "Total Pemasukan",
      type: "INCOME",
      value: "4200000",
    },
  ];
  return { akun, accAset };
};

export default async function Account() {
  const { akun, accAset } = await getData();

  return (
    <>
      <div className=" grid grid-cols-2">
        {accAset.map((aset, i) => (
          <li
            key={i}
            className={
              " list-none grid place-items-center " +
              (i == 0 && " grid place-items-center col-span-2")
            }
          >
            <div>{aset.label}</div>
            <div>
              <MoneyLabel useFor={aset.type} value={aset.value} />
            </div>
          </li>
        ))}
      </div>
      <div className=" px-4">
        <span className="">Rekening</span>
        <Suspense fallback={<Spinner />}>
          {(await akun).map((akun) => (
            <li key={akun.id} className=" list-none">
              <ListItem
                icon={akun.icon}
                subTitle={
                  <span>
                    <MoneyLabel value={String(akun.saldo)} useFor={"NONE"} />
                  </span>
                }
                rightItem={
                  <>
                    <div className=" relative">
                      <button className=" peer">
                        <IoEllipsisHorizontal />
                      </button>
                      <div className=" right-0 absolute peer-target:block hidden">
                        <span>Edit</span>
                        <span>Delete</span>
                      </div>
                    </div>
                  </>
                }
                id={akun.id}
                title={akun.name}
              />
            </li>
          ))}
        </Suspense>
      </div>
      <Link
        href={"#"}
        className=" m-auto text-blue-500 text-sm flex w-fit underline underline-offset-3 "
      >
        Tambah rekening
      </Link>
    </>
  );
}
