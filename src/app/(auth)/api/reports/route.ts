
const data = [
    {
        "id" : 1,
        "name" : "theerasans",
        "lname": "thimachai",
        "ap_start": "2024-02-01",
        "ap_end": "2024-02-01",
    },
    {
        "id" : 2,
        "name" : "theerasans",
        "lname": "thimachai",
        "ap_start": "2024-02-01",
        "ap_end": "2024-02-01",
    },
    {
        "id" : 3,
        "name" : "theerasans",
        "lname": "thimachai",
        "ap_start": "2024-02-01",
        "ap_end": "2024-02-01",
    },
    {
        "id" : 4,
        "name" : "theerasans",
        "lname": "thimachai",
        "ap_start": "2024-02-01",
        "ap_end": "2024-02-01",
    }
]


export async function GET (req : Request) : Promise<any> {

   

    return new Response(JSON.stringify( data ))

}