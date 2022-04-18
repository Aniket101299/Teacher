import {Route, Router} from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../SignUpAndLogin/Login";
import { SignUp } from "../SignUpAndLogin/SignUp";

export const Roouters = () => {
    return(
        <Router>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path={"/signup"} element={<SignUp/>} />
        </Router>
    )
}
