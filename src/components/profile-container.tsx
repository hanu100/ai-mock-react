import { useAuth, UserButton } from "@clerk/clerk-react"
import { Button } from "./ui/button";
import { Loader } from "lucide-react";
import { Link } from "react-router";

 export const ProfileContainer = () => {

    const {isSignedIn , isLoaded} = useAuth()
    if(!isLoaded){
        return(
            <div className="flex items-center">
                <Loader className ="min-w-4 min-h-4 animate-spin text-emerald-500"></Loader>
            </div>
        );
    }
  return <div className="flex items-center gap-6">
   {isSignedIn ? (<UserButton afterSignOutUrl="/" />
   ) : 
   (
    <Link to={"/signin"}>
 <Button size={"sm"}>Get started</Button>
    </Link>
  


   )}
   
     </div>
  
}


