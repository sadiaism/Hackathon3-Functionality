"use client";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import ClerkProvider to avoid async issues
const ClerkProvider = dynamic(() => import("@clerk/nextjs").then((mod) => mod.ClerkProvider), {
  ssr: false, // Disable Server-Side Rendering
});

// Dynamically import Clerk authentication components
const DynamicSignedIn = dynamic(() => import("@clerk/nextjs").then((mod) => mod.SignedIn), { ssr: false });
const DynamicSignedOut = dynamic(() => import("@clerk/nextjs").then((mod) => mod.SignedOut), { ssr: false });
const DynamicSignInButton = dynamic(() => import("@clerk/nextjs").then((mod) => mod.SignInButton), { ssr: false });
const DynamicUserButton = dynamic(() => import("@clerk/nextjs").then((mod) => mod.UserButton), { ssr: false });

const ClerkProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div className="flex justify-end p-4 bg-gray-100">
        <DynamicSignedOut>
          <DynamicSignInButton />
        </DynamicSignedOut>
        <DynamicSignedIn>
          <DynamicUserButton />
        </DynamicSignedIn>
      </div>
      {children}
    </ClerkProvider>
  );
};

export default ClerkProviderWrapper;
