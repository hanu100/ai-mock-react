import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Container } from "./container";
import { LogoContainer } from "./Logo-container";
import { NavigationRoutes } from "./navigation-routes";
import { NavLink } from "react-router-dom";

import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./Toggle-container";

const Header = () => {
  const { userId }= useAuth();
  console.log("User ID:", userId);

  return (
     <header className={cn("w-full border-b duration-150 transition-all ease-in-out")}>
    <Container> 
      <div className="flex items-center gap-4 w-full">
        {/* {logo section } */}



<LogoContainer />

        {/* {navigation section} */}

        <nav className="hidden md:flex items-center gap-3">
            <NavigationRoutes />
            {userId && (
             
              <NavLink
  to="/generate"
  className={({ isActive }) =>
    cn(
      "text-base text-neutral-600",
      isActive && "text-neutral-900 font-semibold"
    )
  }
>
  Take An Interview
</NavLink>
            )}
          </nav>

      

<div className="ml-auto items-center gap-6"></div>
  {/* {profile section} */}
<ProfileContainer />

    {/* mobile toggle section  */}
<ToggleContainer />
      </div>
    </Container>
  </header>
  )
};

export default Header;
