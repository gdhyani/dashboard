import Link from "next/link";

export default function Footer(){
    return(
        <div className=" w-screen text-center p-6 border-t font-mono">
            <h1>Made by <Link className="font-mono hover:underline" href="https://chakraa.in" >Chakraa.in</Link></h1>
        </div>
    )
}