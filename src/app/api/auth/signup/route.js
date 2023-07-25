import User from "@/database/Schema";
import { connect } from "@/database/config";
import { NextRequest, NextResponse } from "next/server";
connect();
export async function POST(request) {
    try {
        const reqBody = await request.json();
        console.log(reqBody);

        const alreadyExist = await User.findOne({ email: reqBody.email });
        if (!alreadyExist) {
            const newUser = new User({
                username: reqBody.username,
                email: reqBody.email,
                password: reqBody.password,
                date: Date("2d"),
                role: "client",
                verified: false,
                typeOfMarketing: "Instagram",
            });
            console.log(newUser);
            await newUser.save();
            return NextResponse.json(reqBody);
        } else {
            console.log("already exist", alreadyExist);
            return NextResponse.json(
                { message: "user already exist" },
                { status: 310 }
            );
        }
        // return NextResponse.json(reqBody);
    } catch (error) {
        return NextResponse.json({ error }, { status: 520 });
    }
}
