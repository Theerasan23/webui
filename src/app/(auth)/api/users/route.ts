import mysql from 'mysql2/promise';
import { NextRequest, NextResponse } from 'next/server';


const pool = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    password: '!Busknight66',
    database: 'rise-db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// SELECT

export async function GET( req : NextRequest , res : NextResponse ) : Promise<any> {

    const id = req.nextUrl.searchParams.get('id') as string;

    if (!id) {
        const [rows, fields] = await pool.query('SELECT * FROM a_users');
        return new Response(  JSON.stringify(rows) );
    }else{

        const [rows, fields] = await pool.query('SELECT * FROM a_users WHERE id = ?', [id]);
        return new Response(  JSON.stringify(rows) );
    }

}


// INSERT
export async function POST(req: NextRequest) : Promise<any> {

    if (!req.body) {
        throw new Error('Request body is missing.');
    }
    
    const requestBody = await req.json(); 
    const { name, lname, email, password } = requestBody; 
    
    const rows = await pool.query('INSERT INTO a_users (name, lname, email, password) VALUES (?,?,?,?)', 
    [name, lname, email, password]); 
    
    return new Response(JSON.stringify(rows));
}

// UPDATE
export async function PUT(req: Request) : Promise<any> {
    if (!req.body) {
        throw new Error('Request body is missing.');
    }
    
    const requestBody = await req.json(); 
    const { id, name, lname, email, password } = requestBody; 
    
    const rows = await pool.query('UPDATE a_users SET name = ?, lname = ?, email = ?, password = ? WHERE id = ?', 
    [name, lname, email, password, id]); 
    
    return new Response(JSON.stringify(rows));
}

// DELETE
export async function DELETE(req: Request) : Promise<any> {
    if (!req.body) {
        throw new Error('Request body is missing.');
    }
    
    const requestBody = await req.json(); 
    const { id } = requestBody; 
    
    const rows = await pool.query('DELETE FROM a_users WHERE id = ?', [id]); 
    
    return new Response(JSON.stringify(rows));
}