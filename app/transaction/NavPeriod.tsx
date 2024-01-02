import { ReactNode } from "react";
import { TbSquareRoundedArrowLeft } from "react-icons/tb";

export const NavPeriod = ({
  content,
  btnAct,
}: {
  content: ReactNode;
  btnAct: { next: () => void; prev: () => void };
}) => {
  return (
    <>
      <div className=" flex items-center justify-evenly">
        <button className=" inline-block" onClick={() => btnAct.prev()}>
          <TbSquareRoundedArrowLeft />
        </button>
        {content}
        <button
          className=" -rotate-180 inline-block"
          onClick={() => btnAct.next()}
        >
          <TbSquareRoundedArrowLeft />
        </button>
      </div>
    </>
  );
};
