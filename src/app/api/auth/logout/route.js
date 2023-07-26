import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    try {
        //creating normal response of thing already done
        const response = NextResponse.json({
            message: "logout successful",
            success: true,
        });
        //now change cookies as cookies functionality are sent with response
        // console.log(response.cookies.get())
        // response.cookies.set("token", "", {
        //     expires: new Date(Date.now()),
        // });
        cookies().set({
            name: "token",
            value: "",
            expires: new Date("2016-10-05"),
            path: "/",
        });
        console.log(response.cookies.get("token"));

        //returning the response
        return response;
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}
