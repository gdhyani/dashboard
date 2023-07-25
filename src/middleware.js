import { NextResponse, NextRequest } from "next/server";

export function middleware(request) {
    const path = request.nextUrl.pathname;
    //check the path people enterign to
    const isPublicPath = path === "/login" || path === "/register";
    // console.log("is public path", isPublicPath);
    //get the token
    const token = request.cookies.get("token");
    //based on the path they visiting and the token (if they have it or not)
    //we are redirecting them away from public paths like signup and login page
    if (isPublicPath & (token != undefined)) {
        return NextResponse.redirect(
            new URL("/user/dashboard", request.nextUrl)
        );
    }
    if (!isPublicPath & (token == undefined)) {
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
}

export const config = {
    matcher: [
        "/",
        "/user/influencer",
        "/user/dashboard",
        "/login",
        "/register",
    ],
};
