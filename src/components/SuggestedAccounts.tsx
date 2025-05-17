'use server'

import { getRandomUsers } from "@/actions/user.action"
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import FollowButton from "./FollowButton"

async function SuggestedAccounts() {
  const users = await getRandomUsers();
  if(users.length === 0) return null;


  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle>Suggested Accounts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.id} className="flex gap-2 items-center justify-between">
              <div className="flex items-center gap-5">
                <Link href={`/profile/${user.username}`}>
                  <Avatar>
                    <AvatarImage src={user.image ?? "/avatar.png"} />
                  </Avatar>
                </Link>
                <div className="text-xs">
                  <Link href={`/profile/${user.username}`} className="font-medium cursor-pointer">
                    {user.name}
                  </Link>
                  <p className="text-muted-foreground">@{user.username}</p>
                  <p className="text-muted-foreground">{user._count.followers} followers</p>
                </div>
              </div>
              <FollowButton userId={user.id} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default SuggestedAccounts