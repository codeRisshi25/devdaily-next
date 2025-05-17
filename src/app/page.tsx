import Image from "next/image";
import { SignInButton, SignOutButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from '../components/ui/button';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 --font-geist-mono">
      <SignedIn>
        <h1>Welcome to Dev Daily !</h1>
        <UserButton />
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <h1>Please sign in</h1>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
}
