// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next';
import GoogleProvider from 'next-auth/providers/google';

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // Add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      if (account.provider === 'google') {
        return profile.email.endsWith('@yourdomain.com'); // Restrict access to specific domain
      }
      return true;
    },
  },
};

export default function option (req: NextApiRequest, res: NextApiResponse) { NextAuth(req, res, options)};
