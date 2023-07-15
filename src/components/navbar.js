"use client";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import Sidebar from "./sidebar";
import Link from "next/link";
export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [notifi, setNotifi] = useState(false);
    const [avatar, setAvatar] = useState(false);
    function handleClick() {
        setOpenMenu(!openMenu);
        console.log(openMenu);
    }
    function handleNotification() {
        setNotifi(!notifi);
    }
    function handleAvatar() {
        setAvatar(!avatar);
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
                        <Link href="/" className="text-2xl font-bold">
                            Dashboard
                        </Link>
                    </div>
                    <div className="flex gap-2 align-middle">
                        <div
                            className="flex items-center"
                            onClick={handleNotification}
                        >
                            <Image
                                src="../notification.svg"
                                width={30}
                                height={30}
                                alt="noti"
                            />
                        </div>
                        <div
                            className={`${
                                notifi ? "flex" : "hidden"
                            } absolute mt-16  bg-black right-1 md:right-28 border w-[99%] md:w-44 h-56 rounded-lg p-4 flex`}
                        >
                            <p className=" h-min text-sm text-[#a1a1aa]">
                                No Active <br></br>Notifications
                            </p>
                        </div>
                        <div>
                            <Image
                                src="../info.svg"
                                width={40}
                                height={40}
                                alt="noti"
                            />
                        </div>

                        <div className="flex align-center">
                            <Image
                                src="../vertical-dots.svg"
                                width={30}
                                height={30}
                                alt="noti"
                            />
                        </div>

                        <div onClick={handleAvatar}>
                            <Image
                                className="border-2 p-1 rounded-full  "
                                src="../avatar.svg"
                                width={40}
                                height={40}
                                alt="noti"
                            />
                        </div>
                        <OutsideClickHandler
                            onOutsideClick={handleAvatar}
                            disabled={!avatar}
                        >
                            <div
                                className={`absolute h-max sm:w-44 p-2 bg-black border rounded-lg ${
                                    avatar ? "flex" : "hidden"
                                } w-[99%] right-1 md:right-3 flex-col mt-16 gap-1`}
                            >
                                <h1
                                    className="text-md font-bold"
                                    href="/user/dashboard"
                                >
                                    Brand
                                </h1>
                                <p className="text-sm text-[#a1a1aa]">
                                    brand@gmail.com
                                </p>
                                <hr className="border-[#a1a1aa]"></hr>
                                <Link
                                    onClick={handleAvatar}
                                    className=" hover:bg-[#2d2d2f98] p-1 rounded-md"
                                    href="/user/dashboard"
                                >
                                    Profile
                                </Link>
                                <Link
                                    onClick={handleAvatar}
                                    className=" hover:bg-[#2d2d2f98] p-1 rounded-md"
                                    href="/user/dashboard"
                                >
                                    Billing
                                </Link>
                                <Link
                                    onClick={handleAvatar}
                                    className=" hover:bg-[#2d2d2f98] p-1 rounded-md"
                                    href="/user/dashboard"
                                >
                                    Settings
                                </Link>
                                <hr className="border-[#a1a1aa]"></hr>

                                <Link
                                    onClick={handleAvatar}
                                    className="text-red-500 hover:bg-[#2d2d2f98] h-fit w-full rounded-md p-1"
                                    href="/login"
                                >
                                    Log out
                                </Link>
                            </div>
                        </OutsideClickHandler>
                    </div>
                </div>
                {/* //side menu */}

                <div
                    className={`${
                        openMenu ? "md:hidden flex" : "hidden"
                    }  z-10 flex-col gap-3 fixed min-w-fit h-screen bg-black border-r-2 border-[#262626] text-left pt-24`}
                >
                    <Sidebar />
                </div>
            </OutsideClickHandler>
        </>
    );
}
