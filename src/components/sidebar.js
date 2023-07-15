"use client";
import Image from "next/image";
import { useState } from "react";
import Alert from "./alert";

export default function Sidebar() {
    const [alert, setAlert] = useState(false);

    return (
        <>
            <button
                onClick={() => {
                    setAlert(true);
                }}
                className="text-left ml-6 mr-4 w-52 px-2 hover:bg-[#121212] rounded py-2 flex items-center gap-3"
            >
                <Image src="home.svg" width={30} height={20} alt=""></Image>
                Home
            </button>
            <h1 className="font-normal ml-6 text-gray-500">Main Menu</h1>
            <button
                onClick={() => {
                    setAlert(true);
                }}
                className="text-left ml-6 mr-4 w-52 px-2 hover:bg-[#121212] rounded py-2 flex items-center gap-3"
            >
                <Image src="account.svg" width={30} height={20} alt=""></Image>
                Account
            </button>
            <button
                onClick={() => {
                    setAlert(true);
                }}
                className="text-left ml-6 mr-4 w-52 px-2 hover:bg-[#121212] rounded py-2 flex items-center gap-3"
            >
                <Image
                    src="customers.svg"
                    width={30}
                    height={20}
                    alt=""
                ></Image>
                Customers
            </button>
            <button
                onClick={() => {
                    setAlert(true);
                }}
                className="text-left ml-6 mr-4 w-52 px-2 hover:bg-[#121212] rounded py-2 flex items-center gap-3"
            >
                <Image src="payment.svg" width={30} height={20} alt=""></Image>
                Payment
            </button>
            <button
                onClick={() => {
                    setAlert(true);
                }}
                className="text-left ml-6 mr-4 w-52 px-2 hover:bg-[#121212] rounded py-2 flex items-center gap-3"
            >
                <Image src="report.svg" width={30} height={20} alt=""></Image>
                Report
            </button>
            <h1 className="font-normal ml-6 text-gray-500">General</h1>
            <button
                onClick={() => {
                    setAlert(true);
                }}
                className="text-left ml-6 mr-4 w-52 px-2 hover:bg-[#121212] rounded py-2 flex items-center gap-3"
            >
                <Image
                    src="developer.svg"
                    width={30}
                    height={20}
                    alt=""
                ></Image>
                Developer
            </button>
            <button
                onClick={() => {
                    setAlert(true);
                }}
                className="text-left ml-6 mr-4 w-52 px-2 hover:bg-[#121212] rounded py-2 flex items-center gap-3"
            >
                <Image
                    src="testreport.svg"
                    width={30}
                    height={20}
                    alt=""
                ></Image>
                Test Report
            </button>
            <div
                className={`absolute bottom-0 h-40 sm:h-44 bg-red-500  font-mono text-white ${
                    alert ? "block" : "hidden"
                }`}
            >
                <div className="flex justify-between pr-2">
                    <h1 className="text-lg ">Error</h1>
                    <button onClick={()=>{setAlert(false)}}>Close</button>
                </div>

                <h1 className="text-2xl font-bold">
                    Not Authorized User
                </h1>
            </div></>
    );
}
