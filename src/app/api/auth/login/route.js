import { connect } from "@/database/config";
import User from "@/database/Schema";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request) {
    connect();
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;
        const userExist = await User.findOne({ email });
        if (userExist) {
            console.log(userExist);
            if (userExist.password == password) {
                console.log("successful login");

                //these data are stored in token which is encrypted
                const tokenData = {
                    id: userExist._id,
                    email: userExist.email,
                    username: userExist.username,
                };
                // creating token
                const token = await jwt.sign(
                    tokenData,
                    process.env.TOKEN_SECRET,
                    {
                        expiresIn: "1d",
                    }
                );
                //normal response
                const response = await NextResponse.json({
                    message: "login successful",
                    success: true,
                });
                //sending cookies with response for token with name "token", token as in object 
                //and last the secret key to encrypt and decrypt data

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
