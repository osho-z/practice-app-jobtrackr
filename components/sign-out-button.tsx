"use client";

import { DropdownMenuItem } from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth/auth-client";

export default function SignOutButton() {
  const router = useRouter();
  return (
  <DropdownMenuItem className="cursor-pointer text-sm text-primary" 
      onClick={async () => {
      const result = await signOut();

      if (result.data) {
        router.push("/sign-in");
      } else {
        alert("Failed to sign out. Please try again.");
      }                       
    }}
  >
    Sign Out
  </DropdownMenuItem>
);
}