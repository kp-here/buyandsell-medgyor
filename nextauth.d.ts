// nextauth.d.ts
declare module "next-auth" {
    interface User {
        nonnitc: boolean;
    }

    interface Session extends DefaultSession {
        user?: User;
    }
}
