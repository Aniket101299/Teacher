import {Route, Routes} from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/SignUpAndLogin/Login";
import { SignUp } from "./Components/SignUpAndLogin/SignUp";




function App() {
  return (
    <div className="App">
    
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path={"/signup"} element={<SignUp/>} />
        </Routes>

    </div>
  );
}

export default App;



   
     
    

