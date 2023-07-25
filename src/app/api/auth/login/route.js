import { connect } from "@/database/config";
import User from "@/database/Schema";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;
        const userExist = await User.findOne({ email });
        if (userExist) {
            // console.log(userExist);
            if ((userExist.password == password)) {
                console.log("successful login");
                const tokenData = {
                    id: userExist._id,
                    email: userExist.email,
                    username: userExist.username,
                };
                const token = await jwt.sign(
                    tokenData,
                    process.env.TOKEN_SECRET,
                    {
                        expiresIn: "1d",
                    }
                );
                const response = await NextResponse.json({
                    message: "login successful",
                    success: true,
                });

                response.cookies.set("token", token, {
                    httpOnly: true,
                });
                return response;
            } else {
                console.log("incorrect password");
                return NextResponse.json(
                    { message: "incorrect password" },
                    { status: 401 }
                );
            }
        } else {
            console.log("nO user found");
            return NextResponse.json(
                { message: "no user found" },
                { status: 404 }
            );
        }
    } catch (err) {
        console.log("Error obTained", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
