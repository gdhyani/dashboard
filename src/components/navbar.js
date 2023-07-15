"use client";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import Sidebar from "./sidebar";
export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    function handleClick() {
        setOpenMenu(!openMenu);
        console.log(openMenu);
    }
    return (
        <>
            <OutsideClickHandler
                disabled={!openMenu}
                onOutsideClick={handleClick}
            >
                <div className="fixed w-screen z-40 bg-black border-b border-[#262626] flex flex-row justify-between px-3 sm:px-10 py-5 items-center">
                    <div className="flex align-middle items-center flex-row gap-2">
                        <button
                            className="sm:hidden block z-50"
                            onClick={handleClick}
                        >
                            <Hamburger toggled={openMenu} size={32}></Hamburger>
                        </button>
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                    </div>
                    <div className="flex gap-2">
                        <Image
                            src="notification.svg"
                            width={25}
                            height={25}
                            alt="noti"
                        />
                        <Image
                            src="info.svg"
                            width={35}
                            height={35}
                            alt="noti"
                        />
                        <Image
                            src="vertical-dots.svg"
                            width={30}
                            height={30}
                            alt="noti"
                        />
                        <Image
                            className="border-2 p-1 rounded-full  "
                            src="avatar.svg"
                            width={40}
                            height={30}
                            alt="noti"
                        />
                    </div>
                </div>
                {/* //side menu */}

                <div
                    className={`${
                        openMenu ? "md:hidden flex" : "hidden"
                    }  z-10 flex-col gap-3 fixed min-w-fit h-screen bg-black border-r-2 border-[#262626] text-left pt-24`}
                >
                    <Sidebar/>
                </div>
            </OutsideClickHandler>
        </>
    );
}
