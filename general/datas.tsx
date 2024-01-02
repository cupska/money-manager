import { ReactNode } from "react";
import {FaCalculator, FaChartPie, FaMoneyBillWave, FaWallet} from "react-icons/fa"

export const navbarData: {id:number, label: string, icon: string | ReactNode, url: string}[] = [
    {
        icon: <FaMoneyBillWave/>,
        id:1,
        label: "transaksi",
        url: "transaction"
    } ,
    {
        icon: <FaWallet/>,
        id:2,
        label: "akun",
        url: "account"
    },
    {
        icon: <FaCalculator />,
        id:3,
        label: "anggaran",
        url: ""
    },
    {
        icon: <FaChartPie/>,
        id:4,
        label: "statistik",
        url: ""
    }
] 