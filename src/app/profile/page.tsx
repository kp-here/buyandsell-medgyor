"use client";
// import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

import { useEffect } from "react";
export default function IndexPage() {
    
    useEffect(() => {}, []);
    let { data, status } = useSession({});
    if (status === "loading") return <h1> loading... please wait</h1>;
    if (status === "authenticated") {
        console.log(data.user.image);

        return (
            <div>
                <h1> hi {data.user.name}</h1>
                <Image src={data.user.image} width={200} height={200} />
                {/* <img src={data.user.image} alt={data.user.name + " photo"} /> */}
                <button onClick={signOut}>sign out</button>
            </div>
        );
    }
    return (
        <div>
            <button onClick={() => signIn("google")}>
                sign in with gooogle
            </button>
        </div>
    );
}
