import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    try {
        const tokenForChecking = cookies().get("token");
        // console.log(tokenForChecking);
        if (tokenForChecking) {
            return NextResponse.json({
                message: "signed user",
                logged: "true",
                success: true,
            });
        } else {
            return NextResponse.json({
                message: "no user Signed in yet",
                logged: false,
                success: true,
            });
        }
    } catch (error) {
        return NextResponse.json(
            { message: "no user signed in yet" },
            { status: 403 }
        );
    }
}
