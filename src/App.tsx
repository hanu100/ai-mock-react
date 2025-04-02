
import { BrowserRouter as Router,Routes ,Route } from "react-router-dom"


import PublicLayout from "@/layouts/public-layout"
import ProtectedRoutes from "@/layouts/Protected-routes"
import AuthenticationLayout from "@/layouts/Auth-layout"
import MainLayout from "@/layouts/main-layout"

import HomePage from "@/Routes/home"
import { SignInPage} from "./Routes/sign-in"
import { SignUpPage } from "./Routes/sign-up"


const App = () => {
  return (
    
  <Router>
    <Routes>
      {/* public routes */}
      <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>


        {/* {authentication routes} */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>


      {/* protected routes */}
      <Route element={<ProtectedRoutes><MainLayout /></ProtectedRoutes>} >
      </Route>
    </Routes>
  </Router>
    
  )
}

export default App;
