import clientPromise from '@/lib/mongodb';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
// import NextAuth, { getServerSession } from 'next-auth';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// const adminEmails = ['philipcheang7@gmail.com'];

// export const authOptions = {
//   providers: [
//     // OAuth authentication providers...
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET
//     }),
//   ],
//   adapter: MongoDBAdapter(clientPromise),
//   // this is how you add admin who can login
//   callbacks: {
//     session: ({session,token,user}) => {
//       if (adminEmails.includes(session?.user?.email)) {
//         return session;
//       } else {
//         return false;
//       }
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };
// export default NextAuth(authOptions)

// export async function isAdminRequest(req,res) {
//   const session = await getServerSession(req,res,authOptions);
//   if (!adminEmails.includes(session?.user?.email)) {
//     res.status(401);
//     res.end();
//     throw 'not an admin';
//   }
// }
// find out who is logging in
//   callbacks: {
//     session: ({session,token,user}) => {
//       console.log({session,token,user});
//       return session;
//     },
//   },

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    session: ({ session, token, user }) => {
      return session;
    },
  },
});
