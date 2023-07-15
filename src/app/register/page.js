"use client";
import Link from "next/link";
import { useState } from "react";
export default function Register() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    function handleUsername(evt) {
        setUser(evt.target.value)
    }
    function handlePassword(evt) {
        setPass(evt.target.value)
    }

    return (
        <main className="w-full h-screen pt-20 text-center">
            <h1 className="text-4xl sm:text-6xl font-black m-10">Register</h1>
            <form className="flex justify-center flex-col max-w-xl m-auto gap-5 ">
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
                    type="password"
                    placeholder="*********"
                    onChange={(evt) => {
                        handlePassword(evt);
                    }}
                    value={pass}
                ></input>
                <Link className="font-mono bg-[#212121] w-fit px-9 py-2 rounded m-auto hover:bg-blue-500" href="/">
                    Register
                </Link>
                <h1 className="font-mono">
                    You already have account!{" "}
                    <Link className="underline font-semibold " href="/login">
                        Login Here
                    </Link>
                </h1>
            </form>
        </main>
    );
}
