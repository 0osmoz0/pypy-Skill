import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // Add any additional middleware logic here
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow access to auth pages without token
        if (req.nextUrl.pathname.startsWith('/api/auth/')) {
          return true;
        }
        if (req.nextUrl.pathname.startsWith('/login')) {
          return true;
        }
        if (req.nextUrl.pathname.startsWith('/register')) {
          return true;
        }
        if (req.nextUrl.pathname.startsWith('/verify-email')) {
          return true;
        }
        if (req.nextUrl.pathname === '/') {
          return true;
        }
        // Require token for protected routes (like /profile)
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
