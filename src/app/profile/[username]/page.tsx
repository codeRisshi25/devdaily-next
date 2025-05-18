export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>
}) {
    const { username } = await params;
    throw new Error("Error in fetching user");
    console.log(username);
  return <h1>My UserName : {username}</h1>
}