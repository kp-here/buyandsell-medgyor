import { useRouter } from 'next/navigation';

let Auth = ({ children }) => {
    const router = useRouter();
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/sign-in");
        },
    });

    if (status === "loading") {
        return <div> Loading... </div>;
    }
    return children;
};

export default Auth
