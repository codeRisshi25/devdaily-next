import Image from "next/image";
import { SignInButton, SignOutButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from '../components/ui/button';
import { ModeToggle } from "@/components/ui/modetoggle";
import { Sheet } from "@/components/ui/sheet";
export default function Home() {
  return (
    <div className="m-1.5">
      <h1>
        home page content
      </h1>
    </div>
  );
}
