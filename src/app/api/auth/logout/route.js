import { NextResponse } from "next/server";

export async function GET() {
    try {
        //creating normal response of thing already done
        const response = NextResponse.json({
            message: "logout successful",
            success: true,
        });
        //now change cookies as cookies functionality are sent with response 
        response.cookies.set("token", "", {
            httpOnly:true, expires:new Date(0)
        })
        //returning the response
        return response;
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}

