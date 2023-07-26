"use client";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import { useState, useEffect } from "react";
import { Cross as Hamburger } from "hamburger-react";
import Sidebar from "./sidebar";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import axios from "axios";
import Loader from "./loader";

export default function Navbar() {
    const [signedin, setSignedin] = useState(false);
    const pathname = usePathname();
    const router = new useRouter();
    //responsive menu open or close which change the hamburger menu button
    const [openMenu, setOpenMenu] = useState(false);
    //open and close when click on notification icon
    const [notifi, setNotifi] = useState(false);
    //open or close when click on avatar
    const [avatar, setAvatar] = useState(false);
    //check loading state
    const [loading, setLoading] = useState(false);
    //
    useEffect(() => {
        getData();
    }, [pathname]);

    async function getData() {
        try {
            const signedUser = await axios.get("/api/auth/signedUser");
            setSignedin(signedUser.data.logged);
        } catch (error) {
            console.log(error.message);
        }
    }
    //
    //
    // change menu based on outside click or simple icon click
    //
    function handleClick() {
        setOpenMenu(!openMenu);
        console.log(openMenu);
    }
    //open and close notification pannel
    //
    function handleNotification() {
        setNotifi(!notifi);
    }
    //open and close avatar pannel
    //
    function handleAvatar() {
        setAvatar(!avatar);
    }
    //handle logout by sending get request to backend to change response data
    //in which token is changed to empty string and thus logout is done
    async function handleLogout() {
        setAvatar(!avatar);
        setLoading(true);
        try {
            await axios.get("/api/auth/logout");
            router.push("/");
            getData();
            setLoading(false);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            {/* when clicked outside the outsideclickhandler it will change accordingly */}
            <Loader loading={loading} />
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

                        <div className="flex align-center">
                            <Image
                                src="../vertical-dots.svg"
                                width={30}
                                height={30}
                                alt="noti"
                            />
                        </div>
                        {/* check for signin  */}
                        {!signedin ? (
                            <div className="flex justify-center items-center">
                                <Link
                                    href={`${
                                        pathname == "/login"
                                            ? "/register"
                                            : "/login"
                                    }`}
                                    className="text-md sm:text-xl rounded-2xl bg-[#212121] px-4 py-2"
                                >
                                    {pathname == "/login" ? "Register" : "Log In"}
                                </Link>
                            </div>
                        ) : (
                            <div onClick={handleAvatar}>
                                <Image
                                    className="border-2 p-1 rounded-full  "
                                    src="../avatar.svg"
                                    width={40}
                                    height={40}
                                    alt="noti"
                                />
                            </div>
                        )}
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

                                <button
                                    className="text-red-500 hover:bg-[#2d2d2f98] h-fit w-full rounded-md p-1"
                                    onClick={handleLogout}
                                >
                                    Log out
                                </button>
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
