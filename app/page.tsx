import {buttonVariants} from "@/components/ui/button"
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-center" >Welcome to Karlo </h1>
      
      <div className="flex gap-4 mt-6">
        <RegisterLink className={buttonVariants()}>Get Started</RegisterLink>

        <LoginLink className={buttonVariants({variant: "outline"})}>Sign In</LoginLink>
      </div>

    </div>
  );
}
