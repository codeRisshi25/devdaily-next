"use server";

import { getDbUserId } from "./user.action";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createPost(content: string, image: string) {
  try {
    const userId = await getDbUserId();
    const post = await prisma.post.create({
      data: {
        content,
        image,
        authorId: userId || "",
      },
    });
    revalidatePath("/");
    return {
      sucess: true,
      post,
    };
  } catch (err) {
    return { sucess: false, error: "Failed to create post" };
  }
}

export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: {
          select: {
            name: true,
            image: true,
            username: true,
          },
        },
        comments: {
          include: {
            author: {
              select: {
                id: true,
                username: true,
                image:true,
                name:true
              },
            },
          },
          orderBy : {
            createdAt : "asc"
          }
        },
        likes: {
            select: {
                userId: true
            }
        },
        _count : {
            select : {
                likes: true,
                comments : true,
            }
        }
      },
    });
    return posts;
  } catch (error) {
    console.log("error in get posts",error);
     throw new Error('Failed to fetch posts')
  }
}
