import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
// import "./style.css"
export default function Dashboard() {
    return (
        <main className="h-screen w-screen pt-20">
            <div className="flex flex-row">
                <div className="md:flex hidden flex-col gap-3 fixed min-w-fit h-screen bg-black border-r-2 border-[#262626] text-left pt-5">
                    <button className="text-left ml-6 mr-6 w-52 px-2 hover:bg-[#121212] rounded py-2 flex items-center gap-3"><Image src="home.svg" width={30} height={20} alt=""></Image>Home</button>
                    <h1 className="font-normal ml-6 text-gray-500">Main Menu</h1>
                    <button className="text-left ml-6 mr-6 w-52 px-2 hover:bg-[#121212] rounded py-2 flex items-center gap-3"><Image src="account.svg" width={30} height={20} alt=""></Image>Account</button>
                    <button className="text-left ml-6 mr-6 w-52 px-2 hover:bg-[#121212] rounded py-2 flex items-center gap-3"><Image src="customers.svg" width={30} height={20} alt=""></Image>Customers</button>
                    <button className="text-left ml-6 mr-6 w-52 px-2 hover:bg-[#121212] rounded py-2 flex items-center gap-3"><Image src="payment.svg" width={30} height={20} alt=""></Image>Payment</button>
                    <button className="text-left ml-6 mr-6 w-52 px-2 hover:bg-[#121212] rounded py-2 flex items-center gap-3"><Image src="report.svg" width={30} height={20} alt=""></Image>Report</button>
                    <h1 className="font-normal ml-6 text-gray-500">General</h1>
                    <button className="text-left ml-6 mr-6 w-52 px-2 hover:bg-[#121212] rounded py-2 flex items-center gap-3"><Image src="developer.svg" width={30} height={20} alt=""></Image>Developer</button>
                    <button className="text-left ml-6 mr-6 w-52 px-2 hover:bg-[#121212] rounded py-2 flex items-center gap-3"><Image src="testreport.svg" width={30} height={20} alt=""></Image>Test Report</button>
                </div>
                <div className="flex flex-col w-full">
                    <div className="min-h-screen  md:pl-64">
                        <div className="p-5 flex flex-col">
                            <h1 className="text-5xl py-3 font-semibold">
                                BRAND
                            </h1>
                            <h1 className="text-lg">
                                Total Influencers : 5000
                            </h1>
                            <h1 className="text-lg">
                                Creation Date : July 12, 2023
                            </h1>
                        </div>
                        <hr className="border border-[#262626]" ></hr>
                        <div className="flex flex-wrap gap-5 my-10 md:mx-5">
                            <div className="p-4 rounded-xl border w-full h-40 md:h-40 md:w-72 flex justify-center flex-col text-left">
                                {" "}
                                <Image
                                    src="heart.svg"
                                    width={40}
                                    height={20}
                                    alt="logo"
                                />{" "}
                                <h1 className="text-lg text-gray-400">Likes</h1>
                                <h1 className="text-4xl font-mono">
                                    2.03M{" "}
                                    <span className="text-green-400 text-base ">
                                        (27.3% up)
                                    </span>
                                </h1>
                            </div>
                            <div className="p-4 rounded-xl border w-full h-40 md:h-40 md:w-72 flex justify-center flex-col text-left">
                                <Image
                                    src="comment-dots.svg"
                                    width={40}
                                    height={20}
                                    alt="logo"
                                />{" "}
                                <h1 className="text-lg text-gray-400">
                                    Comments
                                </h1>
                                <h1 className="text-4xl font-mono">
                                    98.03K{" "}
                                    <span className="text-green-400 text-base"></span>
                                </h1>
                            </div>
                            <div className="p-4 rounded-xl border w-full h-40 md:h-40 md:w-72 flex justify-center flex-col text-left">
                                <Image
                                    src="visible.svg"
                                    width={40}
                                    height={20}
                                    alt="logo"
                                />{" "}
                                <h1 className="text-lg text-gray-400">
                                    Video Plays
                                </h1>
                                <h1 className="text-4xl font-mono">
                                    124.33M{" "}
                                    <span className="text-green-400 text-base">
                                        (10.3% up)
                                    </span>
                                </h1>
                            </div>
                            <div className="p-4 rounded-xl border w-full h-40 md:h-40 md:w-72 flex justify-center flex-col text-left">
                                <Image
                                    src="media.svg"
                                    width={40}
                                    height={20}
                                    alt="logo"
                                />{" "}
                                <h1 className="text-lg text-gray-400">Reach</h1>
                                <h1 className="text-4xl font-mono">
                                    124.33M{" "}
                                    <span className="text-green-400 text-base">
                                        (20.3% up)
                                    </span>
                                </h1>
                            </div>
                            <div className="p-4 rounded-xl border w-full h-40 md:h-40 md:w-72 flex justify-center flex-col text-left">
                                <Image
                                    src="engagement-ring.svg"
                                    width={40}
                                    height={20}
                                    alt="logo"
                                />{" "}
                                <h1 className="text-lg text-gray-400">
                                    Engagement
                                </h1>
                                <h1 className="text-4xl font-mono">
                                    2.13M{" "}
                                    <span className="text-green-400 text-base">
                                        (12.6% up)
                                    </span>
                                </h1>
                            </div>
                            <div className="p-4 rounded-xl border w-full h-40 md:h-40 md:w-72 flex justify-center flex-col text-left">
                                <Image
                                    src="image.svg"
                                    width={40}
                                    height={20}
                                    alt="logo"
                                />{" "}
                                <h1 className="text-lg text-gray-400">
                                    Static Posts
                                </h1>
                                <h1 className="text-4xl font-mono">
                                    200{" "}
                                    <span className="text-green-400 text-base"></span>
                                </h1>
                            </div>
                            <div className="p-4 rounded-xl border w-full h-40 md:h-40 md:w-72 flex justify-center flex-col text-left">
                                <Image
                                    src="video.svg"
                                    width={40}
                                    height={20}
                                    alt="logo"
                                />{" "}
                                <h1 className="text-lg text-gray-400">
                                    Video Posts
                                </h1>
                                <h1 className="text-4xl font-mono">
                                    4.65K{" "}
                                    <span className="text-green-400 text-base"></span>
                                </h1>
                            </div>
                            <div className="p-4 rounded-xl border w-full h-40 md:h-40 md:w-72 flex justify-center flex-col text-left">
                                <Image
                                    src="view.svg"
                                    width={40}
                                    height={20}
                                    alt="logo"
                                />{" "}
                                <h1 className="text-lg text-gray-400">
                                    Carousel Posts
                                </h1>
                                <h1 className="text-4xl font-mono">
                                    156{" "}
                                    <span className="text-green-400 text-base"></span>
                                </h1>
                            </div>
                        </div>
                        {/* second section */}
                        <div className="p-5 flex flex-row justify-between items-center">
                            <h1 className="text-3xl  font-bold">
                                Campaign Posts
                            </h1>

                            <Link
                                href="/list_incfluencer"
                                className="hover:underline font-mono"
                            >
                                View All
                            </Link>
                        </div>
                    </div>

                    {/* <div className="min-h-screen bg-yellow-400">1</div>
                    <div className="min-h-screen bg-blue-400">1</div> */}
                </div>
            </div>
        </main>
    );
}
{
    /* pagination div className="flex gap-2">
                                <buttons className="bg-[#212121] px-3 py-1 active:border hover:border border-green-400">
                                    <Image
                                        src="left.svg"
                                        width={10}
                                        height={20}
                                        alt=""
                                    ></Image>
                                </buttons>
                                <buttons className="bg-[#212121] px-3 py-1 active:border hover:border border-green-400">
                                    1
                                </buttons>
                                <buttons className="bg-[#212121] px-3 py-1 active:border hover:border border-green-400">
                                    2
                                </buttons>
                                <buttons className="bg-[#212121] px-3 py-1 active:border hover:border border-green-400">
                                    3
                                </buttons>
                                <buttons className="bg-[#212121] px-3 py-1 active:border hover:border border-green-400">
                                    4
                                </buttons>
                                <buttons className="bg-[#212121] px-3 py-1 active:border hover:border border-green-400">
                                    5
                                </buttons>
                                <buttons className="bg-[#212121] px-3 py-1 active:border hover:border border-green-400">
                                    6
                                </buttons>
                                <buttons className="bg-[#212121] px-3 py-1 active:border hover:border border-green-400">
                                    7
                                </buttons>
                                <buttons className="">
                                    <Image
                                        src="right.svg"
                                        width={10}
                                        height={20}
                                        alt=""
                                    ></Image>
                                </buttons>
                            </div> */
}