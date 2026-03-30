"use client";

import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useRouter } from "next/router";
import { useSession } from "@/lib/auth/auth-client";
import SignOutButton from "./sign-out-button";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link href="/"
          className="flex items-center gap-2 text-xl font-semibold text-primary"
        >
        <Briefcase />
        JobTrackr
        </Link>
        <div className="flex items-center gap-4">
          {session?.user ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" className="cursor-pointer text-gray-700 hover:text-black">
                  Dashboard
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger render={
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full cursor-pointer p-0">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-white">
                        {session.user.name[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                } />
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuGroup className="p-4">
                    <DropdownMenuLabel>
                      <div>
                        <p className="text-xs mb-2">Signed in as</p>
                        <p className="text-sm font-medium">{session.user.name}</p>
                        <p className="text-xs text-muted-foreground">{session.user.email}</p>
                      </div>
                      <DropdownMenuSeparator className="my-2" />
                    </DropdownMenuLabel>
                    <Link href="/dashboard" className="m-0">
                        <DropdownMenuItem className="cursor-pointer text-sm">Edit Profile</DropdownMenuItem>
                    </Link>
                    <SignOutButton />
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (

          <>
            <Link href="/sign-in">
              <Button variant="ghost" className="text-gray-700 hover:text-black">
                Log In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </>
          )}
        </div>
      </div>
    </nav>
  );
}