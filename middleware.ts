// import { authMiddleware } from "@clerk/nextjs";


// export default authMiddleware({
//   publicRoutes: ["/"],  // 👈 Yeh `/` route ko public bana dega
// });




// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
 
// };


import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"], // Ensure '/' is public
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"], // Simplified matcher
};
