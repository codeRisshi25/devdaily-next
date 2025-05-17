'use client'

import { useState } from "react"
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import { toggleFollow } from "@/actions/user.action";

function FollowButton({userId}: {userId:string}) {
    const [isLoading,setIsLoading] = useState<boolean>(false);

    const handleFollow = async() => {
        setIsLoading(true);
        try {
            await toggleFollow(userId);
            toast.success("User followed successfully")
        }catch(err) {
            console.log('error while following user',err)
            toast.error('Error following user');
        } finally {
            setIsLoading(false);
        }
    }
  return (
    <Button
    size={'sm'}
    variant={'secondary'}
    onClick={handleFollow}
    disabled={isLoading}
    className="w-20">
        {isLoading ? <Loader2Icon className="size-4 animate-spin"/> : "Follow"}
    </Button>
  )
}
import { toast } from "sonner";

export default FollowButton