import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const UserButton = () => {
  return (
    <Button variant="ghost" className="rounded-full flex items-center lg:gap-x-2 p-2 lg:px-2 lg:py-4">
      <Link href="/reviews" className="hidden lg:block">
        <span className="hidden lg:block">
          Welcome!
        </span>
      </Link>
      <Avatar className="w-8 h-8">
        <AvatarImage src="/images/userProfile.png" alt="User Profile Image" />
        <AvatarFallback>JT</AvatarFallback>
      </Avatar>
    </Button>
  )
}

export default UserButton
