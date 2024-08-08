import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, request: NextRequest) => {
  if (isProtectedRoute(request)) auth().protect();

  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.nextUrl.pathname);

  return NextResponse.next({ headers });
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};