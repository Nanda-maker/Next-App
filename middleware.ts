export { default } from "next-auth/middleware";

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

// middleware to be excuted on certain path so to control that if we hit this endpoint like user/
export const config = {
  // *: zero or more
  // +: one or more
  // ?: zero or one
  matcher: ["/dashboard/:path*"],
};
