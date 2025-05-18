import {
  getProfileByUsername,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.actions";
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";

type Params = Promise<{ username: string }>;

export async function generateMetadata(props: { params: Params }) {
  const {username} = await props.params;
  const user = await getProfileByUsername(username);
  if (!user) return;

  return {
    title: `${user.name ?? user.username}`,
    description: user.bio || `Check out ${user.username}'s profile.`,
  };
}

async function ProfilePageServer(props: { params: Params }) {
  const {username} = await props.params;
  const user = await getProfileByUsername(username);

  if (!user) notFound();

  const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
    getUserPosts(user.id),
    getUserLikedPosts(user.id),
    isFollowing(user.id),
  ]);

  return (
    <ProfilePageClient
      user={user}
      posts={posts}
      likedPosts={likedPosts}
      isFollowing={isCurrentUserFollowing}
    />
  );
}
export default ProfilePageServer;
