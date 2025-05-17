'use client'

import { getPosts } from "@/actions/post.action";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import {toggleLike } from '@/actions/post.action'

type Posts =Awaited<ReturnType<typeof getPosts>>
type Post = Posts[number]

function PostCard({post, dbUserId} : {post:Post; dbUserId: string | null}) {
  const { user } = useUser();
  const [newComment, setNewComment] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasLiked, setHasLiked] = useState(post.likes.some((like) => like.userId === dbUserId));
  const [optimisticLikes, setOptmisticLikes] = useState(post._count.likes);
  const [showComments, setShowComments] = useState(false);

  const handleAddComment = async() =>{
    if(isLiking) return;
    try {
        setIsLiking(true);
        setHasLiked(prev => !prev);
        setOptmisticLikes(prev => prev +(hasLiked ? -1 : +1))
        await toggleLike(post.id);
    } catch(err){
        setOptmisticLikes(post._count.likes);
        setHasLiked(post.likes.some((like) => like.userId === dbUserId));
    } finally {
        setIsLiking(false);
    }
  }
  const handleDeletePost = async() =>{

  }
  return (
    
  )
}

export default PostCard