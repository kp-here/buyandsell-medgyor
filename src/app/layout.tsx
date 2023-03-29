'use client'
import "./globals.css";
import { SessionProvider } from "next-auth/react";

// export const metadata = {
//     title: "Create Next App",
//     description: "Generated by create next app",
//     icons: {
//         icon: "/logo.png",
//     },
// };

// let RootLayout = ({ children }: { children: React.ReactNode }) => {
//     return (
//         <html lang="en">
//             <body>{children}</body>
//         </html>
//     );
// };
let RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            <html lang="en">
                <body>{children}</body>
            </html>
        </SessionProvider>
    );
};
export default RootLayout;
