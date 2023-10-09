"use client"
import { Button } from "@/stories/Button"
import { AiFillApple } from "react-icons/ai"
function Records() {
  return (
    <>
      <div className=" text-red-600 ">awd</div>
      <span className=" text-white ">
        <AiFillApple />
      </span>
      <div className=" absolute m-auto">
        <Button
          label="Buttonson"
          primary
          onClick={() => alert("mantap")}
          size="small"
        />
      </div>
    </>
  )
}

export default Records
