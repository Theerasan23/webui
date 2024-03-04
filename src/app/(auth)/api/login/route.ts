
const data = [{
    "id": 1,
    "name" : "theerasan",
    "lname": "thimachai",
    "age": 31,
    "address": "bangkok",
    "phone": "0812345678",
    "email": "data.timemachine@proton.com"
   }]

export async function GET ( req : Response){
   
    return new Response(JSON.stringify(data))
}

export async function POST():Promise<any>{



}