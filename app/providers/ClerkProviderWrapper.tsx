"use client"
import dynamic from "next/dynamic";
import { SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

const DynamicClerkProvider = dynamic(
  () =>
    import("@clerk/nextjs").then(
      (mod) => mod.SignedOut as unknown as React.ComponentType<any>
    ),
  { ssr: false }
);





const DynamicSignedOut = dynamic(
  () =>
    import("@clerk/nextjs").then(
      (mod) => mod.SignedOut as unknown as React.ComponentType<any>
    ),
  { ssr: false }
);

const DynamicSignedIn = dynamic(
  () =>
    import("@clerk/nextjs").then(
      (mod) => mod.SignedIn as unknown as React.ComponentType<any>
    ),
  { ssr: false }
);






interface DynamicClerkProviderProps {
  children: React.ReactNode;
  appearance: {
    elements: {
      formButtonPrimary: string;
    };
  };
}




const ClerkProviderWrapper: React.FC<DynamicClerkProviderProps> =({ children} :{ children: React.ReactNode })=> {
  return (
    
      <DynamicClerkProvider
     
        appearance={{
          elements: {
            formButtonPrimary: "bg-blue-500 hover:bg-blue-700 text-white",
          },
        }}
      >
        <DynamicSignedOut>
          <SignInButton />
        </DynamicSignedOut>
        <DynamicSignedIn>
          <UserButton />
        </DynamicSignedIn>
        {children}
      </DynamicClerkProvider>
    
  );
}
export default ClerkProviderWrapper;


