import {useSignIn} from "@clerk/clerk-react";
import {Button} from "./ui/button";

const SignInOAuthButton = () => {
    const { signIn, isLoaded} = useSignIn();

    if(!isLoaded) {
        return null;
    }

    const signInwithGoogle = () => {
        signIn.authenticateWithRedirect({
            strategy: "oauth_google",
            redirectUrl: "/sso-callback",
            redirectUrlComplete: "/auth-callback",
        });
    };

    return(
        <Button onClick={signInwithGoogle} variant={"secondary"} className="w-full text-white border-zinc-200 h-11">
            <img src='/google.png' alt='Google' className='size-5' />
            Continue with Google
        </Button>
    );
};

export default SignInOAuthButton;