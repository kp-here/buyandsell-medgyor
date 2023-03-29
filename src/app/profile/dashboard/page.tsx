"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

let Page = () => {
    // const [val, setVal] = useState(null);
    const { data, status } = useSession({});

    useEffect(() => {
        if (data?.user?.nitc === false) {
            setTimeout(() => {
                signOut();
            }, 2000);
        }
    }, [data]);

    if (status === "authenticated") {
        return (
            <div>
                {data?.user?.nitc ? (
                    <div>
                        <h1> hi {data.user.name}</h1>
                        <h1> email {data.user.email}</h1>
                        <Image
                            src={data.user.image}
                            width={200}
                            height={200}
                            alt="hi"
                        />
                        {/* <img src={data.user.image} alt={data.user.name + " photo"} /> */}
                        <button onClick={signOut}>sign out</button>
                    </div>
                ) : (
                    <>Not an nitc user Logging you out</>
                )}
            </div>
        );
    }
};
export default Page;
