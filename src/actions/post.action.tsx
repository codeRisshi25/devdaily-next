'use server';

import { currentUser } from "@clerk/nextjs/server";
import { getDbUserId } from "./user.action";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createPost (content:string, image:string){
    try {
        const userId = await getDbUserId();
        const post = await prisma.post.create({
            data: {
                content,
                image,
                authorId: userId || "",
            }
        }) 
        revalidatePath('/');
        return {
            sucess:true,post
        }
    } catch(err){
        return {sucess:false, error:"Failed to create post"}
    }
}
