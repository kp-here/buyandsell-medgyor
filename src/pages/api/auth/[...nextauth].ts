import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        // async jwt(props) {
        //     const { token, user, account } = props;
        //     // const isSignIn = user?.email ? true : false;
        //     // if (user?.email === "abhioverthere@gmail.com") {
        //     //     console.log("triggered");
        //     //     return {
        //     //         ...token,
        //     //         error: "nonnitc",
        //     //     };
        //     // }
        //     return token;
        // },
        async session({ session, trigger, newSession }) {
            if (session.user.email.split("@")[1] === "nitc.ac.in") {
                console.log("non-nitcian tried to log in");

                session.user.nitc = true;
                return session;

                // return null;
            } else {
                session.user.nitc = false;
                return session;
            }

            // console.log(session,trigger,newSession);

            // return { ...session, nonnitc: true };
        },
        // async signIn({ user, account, profile, email, credentials }) {
        //     // return { ...user, nonnitc: true };
        //     // console.log(user.email);
        // },
    },
};

export default NextAuth(authOptions);
