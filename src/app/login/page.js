"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState({
        there: false,
        status: "",
        message: "",
    });
    function handleEmail(evt) {
        setEmail(evt.target.value);
    }
    function handlePassword(evt) {
        setPass(evt.target.value);
    }

    async function onSubmit(event) {
        setError({ ...error, there: false });
        try {
            event.preventDefault();
            const data = { email, password: pass };
            const sentData = await axios.post("/api/auth/login", data);
            console.log("successfull login");
            router.push("/user/dashboard")
        } catch (error) {
            //incorrect password message
            if (error.response.status == 404) {
                setError({
                    there: true,
                    status: error.response.status,
                    message: "No User Found Please Register First.",
                });
            } else if (error.response.status == 401) {
                setError({
                    there: true,
                    status: error.response.status,
                    message: "Incorrect password",
                });
            }
            console.log("error occured", error.response.status);
        }
    }

    return (
        <div className="w-screen flex">
            <Image
                src="/login.jpg"
                width={500}
                height={500}
                className="md:w-5/6 md:static absolute -z-10 rounded-3xl  md:m-3 md:mt-24 overflow-hidden"
                alt="img"
            />
            <div className="w-screen md:pt-0 md:mt-52 sm:mx-0 mt-40 pt-20 sm:h-full h-screen text-center bg-black">
                <h1 className="text-5xl sm:text-6xl font-black m-10">Login</h1>
                {/* incorrect message display */}
                <h1 className="test-2xl font-mono text-red-600">
                    {error.there ? `${error.message}` : ""}
                </h1>
                <form
                    className="flex justify-center flex-col max-w-sm md:max-w-lg m-auto gap-5 "
                    onSubmit={(evt) => {
                        onSubmit(evt);
                    }}
                >
                    <input
                        className="px-5 py-2 border-2 rounded text-black"
                        type="email"
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
                        href="/user/dashboard"
                        type="submit"
                    >
                        Login !
                    </button>
                    <h1 className="font-mono">
                        Dont have account!{" "}
                        <Link
                            className="underline font-semibold "
                            href="/register"
                        >
                            Register Here
                        </Link>
                    </h1>
                </form>
            </div>
        </div>
    );
}
