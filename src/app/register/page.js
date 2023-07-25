"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { handleClientScriptLoad } from "next/script";
import axios from "axios";
import { useRouter } from 'next/navigation'
import Loader from "@/components/loader";
export default function Register() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    function handleUsername(evt) {
        setUser(evt.target.value);
    }
    function handlePassword(evt) {
        setPass(evt.target.value);
    }
    function handleEmail(evt) {
        setEmail(evt.target.value);
    }
    async function onSubmit(evt) {
        setLoading(true)
        try {
            evt.preventDefault();
            const data = { email, username: user, password: pass };
            const sendData = await axios.post("api/auth/signup", data);
            // console.log("data send successfully", sendData)
            setLoading(false);
            router.push("/login")
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <div className="w-screen flex">
            <Loader loading={loading}></Loader>
            <Image
                src="/register.jpg"
                width={500}
                height={500}
                className="md:w-5/6 w-screen h-[700px] md:static absolute -z-10 rounded-3xl md:m-3 md:mt-24 overflow-hidden"
                alt="img"
            />
            <div className="w-screen md:pt-0 md:mt-52 mt-40 pt-20 sm:h-full h-screen text-center  bg-black">
                <h1 className="text-5xl sm:text-6xl font-black m-10">
                    Register
                </h1>
                <form
                    className="flex justify-center flex-col max-w-sm md:max-w-lg m-auto gap-5 "
                    onSubmit={(evt) => {
                        onSubmit(evt);
                    }}
                >
                    <input
                        className="px-5 py-2 border-2 rounded text-black"
                        type="text"
                        placeholder="username"
                        onChange={(evt) => {
                            handleUsername(evt);
                        }}
                        value={user}
                    ></input>
                    <input
                        className="px-5 py-2 border-2 rounded text-black"
                        type="text"
                        placeholder="email"
                        onChange={(evt) => {
                            handleEmail(evt);
                        }}
                        value={email}
                    ></input>
                    <input
                        className="px-5 py-2 border-2 rounded text-black"
                        type="password"
                        placeholder="*********"
                        onChange={(evt) => {
                            handlePassword(evt);
                        }}
                        value={pass}
                    ></input>
                    <button
                        className="font-mono bg-[#212121] w-fit px-9 py-2 rounded m-auto hover:bg-blue-500"
                        href="/"
                        type="submit"
                    >
                        Register
                    </button>
                    <h1 className="font-mono">
                        You already have account!{" "}
                        <Link
                            className="underline font-semibold "
                            href="/login"
                        >
                            Login Here
                        </Link>
                    </h1>
                </form>
            </div>
        </div>
    );
}
