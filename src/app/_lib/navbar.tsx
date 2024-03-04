import Link from "next/link";

export default function Navbar(){

    return (

        <nav className="border-md border-b-[1px] border-gray-400/30 bg-white/50 text-gray-900 fixed w-full shadow-sm backdrop-blur-sm">
            <div className="flex justify-between p-5 items-center">
                <div className=" font-bold ">
                    <Link href={'/'}>webui3</Link>
                </div>
                <ul className="flex  items-center"> 
                    <li className="px-2 cursor-pointer"><Link href={'/report'}>Report</Link></li>
                    <li className="px-2 cursor-pointer"><Link href={'/register'}>Register</Link></li>
                    <li className="px-6 p-1 cursor-pointer rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                        <Link href={'/login'} className=" text-white font-bold">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );

}