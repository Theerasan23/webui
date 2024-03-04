import { NextResponse , type NextRequest } from "next/server";

export function middleware(req: NextRequest){


    if(req.nextUrl.pathname === "/contact"){

        return NextResponse.redirect( new URL("/" , req.url))

    }

}