import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        await connect();
        const posts=await Post.find()
        
        return new NextResponse(JSON.stringify(posts),{ status:200})
    } catch (error) {
        return new NextResponse('DATABASE ERROR',{ status:500})
        
    }
}