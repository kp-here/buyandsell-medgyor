"use client";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import Styles from "./page.module.css";
import Image from "next/image";

export default function IndexPage() {
    const router = useRouter();
    let { data, status } = useSession();
    if (status === "loading") return <h1> loading... please wait</h1>;
    if (status === "authenticated") {
        router.push("/profile/dashboard");
    } else {
        return (
            <div>
                <button
                    className={Styles.gbtn}
                    onClick={() =>
                        // signIn("google", {
                        //     callbackUrl: "http://localhost:3000/profile/dashboard",
                        // })
                        signIn("google")
                    }
                >
                    <Image src="/google-icon.svg" width={30} height={30} />
                    <div className={Styles.gtxt}>sign in with gooogle</div>
                </button>
            </div>
        );
    }
}
