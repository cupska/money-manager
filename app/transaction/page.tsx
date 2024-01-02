"use client";
import moment from "moment";
import { NavPeriod } from "./NavPeriod";
import { RecordList } from "./RecordList";
import { Suspense, useEffect, useState } from "react";
import { Spinner } from "@/components/ui/Spinner";

const getData = (bulan: number) => {
  const data = fetch(`/transaction/api/daftarTransaksi?month=${bulan}`)
    .then((val) => val.json())
    .then((val) => val);
  return data;
};

export default function Transaction() {
  const today = new Date();
  const [data, setData] = useState();
  const [bulan, setBulan] = useState(today.getMonth());
  useEffect(() => {
    getData(bulan).then((val) => setData(val));
  }, [bulan]);

  console.log({ data: data, bln: bulan });
  const formatedDate = moment(today).format("MMMM, YYYY");
  return (
    <>
      <NavPeriod
        btnAct={{
          next() {
            setBulan(bulan + 1);
          },
          prev() {
            setBulan(bulan - 1);
          },
        }}
        content={formatedDate}
      />
      <ul className=" p-4 space-y-4">
        <Suspense
          fallback={
            <div className=" mt-[10rem]">
              <Spinner />
            </div>
          }
        >
          <RecordList data={data} />
        </Suspense>
      </ul>
    </>
  );
}
