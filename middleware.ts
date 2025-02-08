import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default process.env.NODE_ENV === "development"
  ? authMiddleware()
  : function middleware() {
      return NextResponse.next(); // ✅ Vercel mein middleware disable
    };



export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
 
};