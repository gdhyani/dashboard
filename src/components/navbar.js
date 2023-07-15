import Image from "next/image";

export default function Navbar () {
    return(
        <div className="fixed w-screen z-20 bg-black border-b border-[#262626] flex flex-row justify-between px-3 sm:px-10 py-5 items-center">
            <div className="flex flex-row gap-2">
                <button className="sm:hidden block">ham</button>
                <h1 className="sm:block hidden text-2xl font-bold">Chakraa Dashboard</h1>
                <h1 className="sm:hidden block text-2xl font-bold">CD</h1>
            </div>
            <div className="flex gap-2">
                <Image src="notification.svg" width={25} height={25} alt="noti" />
                <Image src="info.svg" width={35} height={35} alt="noti" />
                <Image src="vertical-dots.svg" width={30} height={30} alt="noti" />
                <Image className="border-2 p-1 rounded-full  " src="avatar.svg" width={40} height={30} alt="noti" />
            </div>
        </div>
    )
}