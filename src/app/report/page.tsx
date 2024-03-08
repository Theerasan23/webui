import Link from "next/link";


export default  async function Report(){


    const get_ap =  await fetch("http://localhost:4000/api/reports" , {cache: "no-store"});
    const data_api = JSON.stringify( await get_ap.json());
    const user = JSON.parse(data_api);
   

    return (

        <div className="md:flex justify-center w-full">


            <div className="md:grid md:grid-cols-1 sm:grid-cols-1 gap-1">


                <div className="card p-[3px]">
                    <div className="card-body bg-white p-2">
                        <div className="grid md:grid-cols-1 py-4 px-3 pb-4 text-bold text-[18px] bg-slate-100">
                            <label htmlFor=""> Report </label>
                        </div>
                        <div className="grid md:grid-cols-3 gap-3">
                            <div></div>
                            <div></div>
                            <div className="search pt-3 flex justify-end p-1">
                                <input type="text" className="bg-white border-b-[1px] p-2 w-full" placeholder="search"/>
                                <button className="p-2 bg-slate-800 text-white rounded-md hover:bg-slate-600 px-7">search</button>
                            </div>
                               
                        </div>
                        <div className="flex justify-between border-[1px] p-2">
                            <table className="table-auto w-full">
                                <thead className=" text-center border-b-[1px]">
                                    <tr>
                                        <th>#</th>
                                        <th>name</th>
                                        <th>lastname</th>
                                        <th>ap date</th>
                                        <th>ap end</th>
                                        <th className="text-end">pdf report</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center items-center">
                                    { user.map( (id:any)=>(
                                    <tr className="" key={id.id}>
                                        
                                        <td>{ id.id }</td>
                                        <td>{ id.name }</td>
                                        <td>{ id.lname }</td>
                                        <td>{ id.ap_start }</td>
                                        <td>{ id.ap_end }</td>
                                        <td className="flex justify-end items-end ">

                                            <Link href={`/document/${id.id}`}> <button className="p-2 bg-slate-800 text-white rounded-md">report</button> </Link>

                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                       
                    </div>
                </div>
            </div>

        </div>

    );

}