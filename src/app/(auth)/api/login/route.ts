
const data = [{
    "id": 1,
    "name" : "theerasan",
    "lname": "thimachai",
    "age": 31,
    "address": "bangkok",
    "phone": "0812345678",
    "email": "data.timemachine@proton.com"
   }]

const data2 = {
    "id": 1,
    "user": "theerasan",
    "password": "1234",
}

export async function GET(request: Request) {

    return new Response(JSON.stringify(data))


}