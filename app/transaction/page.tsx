import moment from "moment"
import { NavPeriod } from "./NavPeriod"
import { RecordList } from "./RecordList"
import { Suspense } from "react"
import { Spinner } from "@/components/ui/Spinner"

export default function Transaction() {
  const today = new Date()
  const formatedDate = moment(today).format("MMMM, YYYY")
  return (
    <>
      <NavPeriod content={formatedDate} />
      <ul className=" p-4 space-y-4">
        <Suspense
          fallback={
            <div className=" mt-[10rem]">
              <Spinner />
            </div>
          }
        >
          <RecordList />
        </Suspense>
      </ul>
    </>
  )
}
