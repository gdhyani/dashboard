"use client";
import Link from "next/link";
import "../app/globals.css";
import influencers from "./influencer";
import Image from "next/image";
import { useState } from "react";
export default function List_influ() {
    const [paginate, setPaginate] = useState(1);
    return (
        <main className="overflow-hidden">
            <div className="my-10 p-4 sm:p-8 justify-between flex flex-row  items-center">
                <h1 className="text-3xl  font-bold">Campaign Posts</h1>

                <Link
                    href="/list_incfluencer"
                    className="hover:underline font-mono text-xs"
                >
                    [ View All ]
                </Link>
            </div>
            <div className="p-3 m-3 rounded-xl border overflow-auto">
                <table className="w-full">
                    <thead className="sticky top-0">
                        <tr className="text-[#a1a1aa]">
                            <th className="px-5 sm:px-8 pt-5 pb-8">Sn.</th>
                            <th className="px-5 sm:px-8 pt-5 pb-8">User </th>
                            <th className="px-5 sm:px-8 pt-5 pb-8 ">Likes</th>
                            <th className="px-5 sm:px-8 pt-5 pb-8">Comments</th>
                            <th className="px-5 sm:px-8 pt-5 pb-8">Plays</th>
                            <th className="px-5 sm:px-8 pt-5 pb-8">Reach</th>
                            <th className="px-5 sm:px-8 pt-5 pb-8">
                                Engagement
                            </th>
                            <th className="px-5 sm:px-8 pt-5 pb-8">Access</th>
                        </tr>
                    </thead>
                    <tbody className="overflow-y-auto">
                        {influencers.map((infl, index) => {
                            if (
                                index < paginate * 10 &&
                                index >= (paginate - 1) * 10
                            ) {
                                return (
                                    <tr className="" key={index}>
                                        <td className="px-5 sm:px-8 py-3 font-mono">
                                            {index + 1}
                                        </td>
                                        <td className="px-5 sm:px-8 py-3 text-lg">
                                            {infl.username} <br></br>
                                            <p className="text-[#a1a1aa] font-mono">
                                                Followers: {infl.followers}
                                                <br></br>
                                                {infl.dateUpdated}
                                            </p>
                                        </td>
                                        <td className="px-5 sm:px-8 py-3 font-mono">
                                            {infl.likes}
                                        </td>
                                        <td className="px-5 sm:px-8 py-3 font-mono">
                                            {infl.comments}
                                        </td>
                                        <td className="px-5 sm:px-8 py-3 font-mono">
                                            {infl.play}
                                        </td>
                                        <td className="px-5 sm:px-8 py-3 font-mono">
                                            {infl.reach}
                                        </td>
                                        <td className="px-5 sm:px-8 py-3 font-mono">
                                            {infl.engagement}
                                        </td>
                                        <td className="px-5 sm:px-8 py-3  ">
                                            <Link
                                                className="bg-gradient-to-r from-red-500 to-orange-500 rounded px-3 py-1 font-medium text-white flex justify-center"
                                                href={infl.link}
                                            >
                                                Follow Post!
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end pr-3 sm:pr-10 gap-2 items-center pb-10">
                <h1 className="mr-5 sm:mr-10">
                    Page {paginate} of {Math.floor(influencers.length / 10) + 1}
                </h1>
                {/* {influencers.map(() => { */}
                <button
                    onClick={() => {
                        setPaginate(paginate - 1);
                    }}
                    className="px-2 py-1 border rounded-md border-[#57575a] text-white bg-black hover:bg-[#212121]"
                >
                    <Image
                        src="../double-arrow-left-white.svg"
                        width={20}
                        height={20}
                        alt=""
                    ></Image>
                </button>
                <button
                    onClick={() => {
                        setPaginate(paginate + 1);
                    }}
                    className="px-2 py-1 border rounded-md border-[#57575a] text-white bg-black hover:bg-[#212121]"
                >
                    <Image
                        src="../arrow-left-white.svg"
                        width={20}
                        height={20}
                        alt=""
                    ></Image>
                </button>
                <button
                    onClick={() => {
                        setPaginate(paginate - 1);
                    }}
                    className="px-2 py-1 border rounded-md border-[#57575a] text-white bg-black hover:bg-[#212121]"
                >
                    <Image
                        src="../arrow-right-white.svg"
                        width={20}
                        height={20}
                        alt=""
                    ></Image>
                </button>
                <button
                    onClick={() => {
                        setPaginate(paginate + 1);
                    }}
                    className="px-2 py-1 border rounded-md border-[#57575a] text-white bg-black hover:bg-[#212121]"
                >
                    <Image
                        src="../double-arrow-right-white.svg"
                        width={20}
                        height={20}
                        alt=""
                    ></Image>
                </button>

                {/* })} */}
            </div>
        </main>
    );
}
