"use client";
import Loader from 'lib/loader'
// import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";

// let App = ({ children, ...pageProps }) => {
//     return <SessionProvider>{children}</SessionProvider>;
// };
// export default App;

import { useSession } from "next-auth/react";
let Page = ({ children }) => {

    // let pushRouter = ()=>{
    //     router.push("/login");
    // }
    const router = useRouter();
    let { data, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/login");
        },
    });
    // console.log(data,status);

    if (status === "loading") {
        return <><Loader/></>;
    }
    // if (status === "unauthenticated") {
    //     pushRouter()
    // } 
    else {
        return <div>{children}</div>;
    }
};
export default Page;
