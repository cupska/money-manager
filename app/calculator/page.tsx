"use client";

import { OrderTypeOpts } from "@prisma/client";
import { useState } from "react";
import "./style.css";
import { Textfit } from "react-textfit";

export default function Calculator() {
  const [currOrder, setCurrOrder] = useState<OrderTypeOpts>(
    OrderTypeOpts.EXPENSE
  );
  const [input, setInput] = useState();

  const {
    numClickHandler,
    commaClickHandler,
    equalsClickHandler,
    invertClickHandler,
    percentClickHandler,
    resetClickHandler,
    signClickHandler,
    calc,
  } = useCalc();
  return (
    <>
      <div className=""></div>
      <section className=" w-full flex justify-around">
        {[
          [OrderTypeOpts.INCOME, "green"],
          [OrderTypeOpts.EXPENSE, "red"],
          [OrderTypeOpts.TRANSFER, "blue"],
        ].map(([order, color], i) => (
          <button
            type="button"
            onClick={() => setCurrOrder(order as OrderTypeOpts)}
            className={
              " capitalize font-medium duration-1000 " +
              (order == currOrder ? ` text-${color}-500` : " text-gray-400")
            }
            key={i}
          >
            {order}
          </button>
        ))}
      </section>
      <section className=" flex justify-evenly ">
        {[
          ["Akun", "Pilih akun"],
          ["Kategori", "Pilih kategori"],
        ].map(([judul, inputBtn], i) => (
          <div key={i} className=" flex flex-col items-center">
            <span className=" text-sm">{judul}</span>
            <button type="button" className=" border rounded-lg px-4 py-2">
              {inputBtn}
            </button>
          </div>
        ))}
      </section>
      {/* CALCULAROR INPOUTS */}
      <section>
        <div>
          <Textfit mode="single" className=" text-right">
            {" "}
            {calc.num ? calc.num : calc.res}
          </Textfit>
        </div>
        <ul
          id="calcNum"
          className=" w-fit gap-2 m-auto grid grid-cols-4 place-items-center"
        >
          {[
            ["C", "+-", "%", "/"],
            [7, 8, 9, "X"],
            [4, 5, 6, "-"],
            [1, 2, 3, "+"],
            [0, ".", "="],
          ]
            .flat()
            .map((btn, iBtn) => {
              const btnHandler = () => {
                switch (btn) {
                  case "C":
                    resetClickHandler();
                    break;
                  case "+-":
                    invertClickHandler();
                    break;
                  case "%":
                    percentClickHandler();
                    break;
                  case "=":
                    equalsClickHandler();
                    break;
                  case "/" || "X" || "-" || "+":
                    signClickHandler(btn);
                    break;
                  case ".":
                    commaClickHandler(btn);
                    break;
                  default:
                    numClickHandler(btn);
                    break;
                }
              };

              return (
                <button
                  key={iBtn}
                  value={btn as string}
                  onClick={() => btnHandler()}
                  className={` ${
                    btn == "=" ? " w-full" : "w-20"
                  } text-2xl h-20 items-center rounded-lg flex justify-evenly`}
                >
                  <span>{btn == "." ? "," : btn}</span>
                </button>
              );
            })}
        </ul>
      </section>
    </>
  );
}

const useCalc = () => {
  const toLocaleString = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
  const removeSpaces = (num) => num.toString().replace(/\s/g, "");
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const numClickHandler = (e) => {
    const value = e;

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const commaClickHandler = (e) => {
    const value = e;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e) => {
    const value = e;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.res)),
                  Number(removeSpaces(calc.num)),
                  calc.sign
                )
              ),
        sign: "",
        num: 0,
      });
    }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
      sign: "",
    });
  };

  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  return {
    numClickHandler,
    commaClickHandler,
    signClickHandler,
    resetClickHandler,
    percentClickHandler,
    invertClickHandler,
    equalsClickHandler,
    calc,
  };
};
