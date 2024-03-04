
"use client"

import { useFormState } from "react-dom";

import { login } from '../(_action)/action'

export default  function Login(){

    let return_text : string = "";
    const [state , formAction] = useFormState(login,null);
    const message =  JSON.parse ( JSON.stringify(state) );
   
    if(message === 'ok'){
        return_text = "success";
    }else{
        return_text = "error";
    }
    
    return (

        <div className="card md:flex md:justify-center items-center p-4">
            
            <div className="card-body md:rounded-md rounded-md bg-white shadow-sm md:w-[50%] justify-center md:items-center border-[1px]">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 p-4 md:w-full md:px-full">
                    <form action={formAction}>

                            <div className="title_login  rounded-md p-3 font-bold text-teal-950">
                                <h3 className="text-lg flex justify-center">Login page</h3>
                            </div>
                            <div className="username py-2">
                                <label className="block mb-2 font-medium text-teal-950"> username</label>
                                <input type="text" id="username" name="username" className="bg-white border-b-[1px] p-2.5 rounded-sm text-teal-950 w-full" placeholder="username" required />
                            </div>
                            <div className="password">
                                <label className="block mb-2 font-medium text-teal-950">password</label>
                                <input type="text" id="password" name="password" className="bg-white border-b-[1px] text-teal-950 p-2.5 rounded-sm w-full" placeholder="password" required />
                            </div>
                            <div className="btn_submit py-3">
                                <button className="btn p-3 rounded-md text-white bg-violet-900 border-2 w-full ">Login</button>
                            </div>

                    </form>

                    <p>message is : {return_text } </p>
                   
                </div>
            </div>
        </div>

    );
}

