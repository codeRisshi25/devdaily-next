import Link from "next/link";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/actions/user.action";
import Image from "next/image";

async function Navbar() {
  const user = await currentUser();
  if (user) await syncUser(); // POST
  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
            <Image 
              src="./logo.svg" 
              alt="Logo" 
              width={40} 
              height={40} 
              className="mr-3" 
            />
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              DevDaily
            </Link>
            </div>

          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
