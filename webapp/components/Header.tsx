"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import UserCard from "./UserCard";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 h-16 border-b bg-background">

      {/* Left */}
      <h1 className="font-bold text-lg">CreatorOne.</h1>

      {/* Right */}
      <div className="flex items-center gap-4">

        <ModeToggle />

        <Button variant="outline">
          Waiting List
        </Button>

        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <Button>Sign Up</Button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserCard />
        </SignedIn>

      </div>
    </header>
  );
}
