import NextAuth from 'next-auth';
import type { AuthOptions, Awaitable } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const code = 'S1KR3TS4NT4';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        code: { label: 'Code', type: 'text' },
      },
      async authorize(credentials: any, req: any) {
        if (typeof credentials !== 'undefined') {
          const isAuthed = credentials.code.toLowerCase() === code.toLowerCase();

          if (isAuthed) {
            return {
              id: 'S1KR3T',
              name: 'S4NT4',
            };
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  secret: 'S1KR3TS4NT4',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
