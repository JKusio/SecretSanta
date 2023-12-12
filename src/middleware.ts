import { withAuth } from 'next-auth/middleware';

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith('/wishes') && token === null) {
        return false;
      }
      return true;
    },
  },
  secret: 'S1KR3TS4NT4',
  pages: {
    signIn: '/',
  },
});
