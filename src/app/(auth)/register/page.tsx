"use client"

import { RegisterForm } from "../(_action)/action";
import Link from "next/link";


export default function Register(){


    return (
    <div className="md:container-fluid md:flex justify-center w-full">
        <div className="card p-4">

            <div className="card-body bg-white/40 p-2 rounded-md shadow-md ">

                <div className="grid md:grid-cols-1 py-3 px-3 pb-4 font-bold text-[18px] bg-gradient-to-r from-red-500 via-red-300 rounded-md to-red-200 text-white">
                    <label htmlFor=""> Registration </label>
                </div>

                {/* form */}
                <form action={RegisterForm}>
                    <div className="grid md:grid-cols-3 gap-4 p-3 ">

                        <div className="title">
                            <label htmlFor="" className="block text-cyan-950 font-sans "> Title </label>
                            
                            <select className="w-full bg-white/50 p-2.5 border-b-[1px]" name="title" id="" required>
                                <option ></option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </div>
                        <div className="fname">
                            <label htmlFor="" className="block  text-cyan-950 font-sans "> First name </label>
                            <input type="text" name="fname" className="w-full  p-2 bg-white/20 border-b-[1px] border-orange-950/10" />
                        </div>
                        <div className="lname">
                            <label htmlFor="" className="block  text-cyan-950 font-sans "> Last name </label>
                            <input type="text" name="lname" className="w-full p-2 bg-white/20  border-b-[1px] border-orange-950/10" />
                        </div>
                        <div className="birth">
                            <label htmlFor="" className="block  text-cyan-950 font-sans "> Date of birth </label>
                            <input type="date" name="birth" className="w-full bg-white/20 p-2 border-b-[1px] border-orange-950/10" />
                        </div>
                      
                    </div>
                    

                    <div className="grid md:grid-1 gap-3 p-4 py-[30px]">
                    
                    <div className="text_Auth font-sans text-red-900 bg-slate-100 p-2">
                        <label htmlFor="" className="box">Authentication</label>
                    </div>

                    <div className="username">
                            <label htmlFor="" className="block  text-cyan-950 font-sans "> Username </label>
                            <input type="text" name="username" className="w-full p-2 border-b-[1px] bg-white/70" />
                        </div>
                        <div className="password">
                            <label htmlFor="" className="block  text-cyan-950 font-sans "> Password </label>
                            <input type="password" name="password" className="w-full p-2 border-b-[1px] border-gray-200 bg-white/70" />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <div className="grid grid-cols-2 gap-1">

                            <button className="btn bg-slate-600 text-white p-2 rounded-md">Register</button>
                            <Link href="/login">
                                <button className="btn bg-orange-500 text-white p-2 rounded-md">login page</button>
                            </Link> 
                        </div>
                    </div>
                </form>
                {/* end form */}

            </div>

        </div>
    </div>
    
    );
}