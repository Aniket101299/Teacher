// import { useContext } from "react";
// import {Navigate} from "react-router-dom";
// import { RegistrationContext } from "../Context/RegistrationContext";
// import "./Login.css";

// export const Login = () => {
//     const {
//         dispatch,
//         validate,
//         password,
//         name,
//         age,
//         username
//     } = useContext(RegistrationContext);

//     if(!name || !age || !username || !password) {
//        <Navigate to="/signup"/> 
//     }

//     return(
//         <div className="form2">
//             <input
//             placeholder="enter username"
//             type="text"
//             value={username}
//             onChange= {(e) => 
//             dispatch({
//                 type: "CHANGE_USERNAME",
//                 payload: e.target.value
//              })
//             }
//             >
//             </input>

//             <br/>

//             <input
//             placeholder="enter password"
//             type="text"
//             value={password}
//             onChange= {(e) => ( 
//             dispatch({type: "CHANGE_PASSWORD", payload: e.target.value})
//             )
//             }
//             >
//             </input>

//             <br/>

//             <button 
//             disabled={
//                 !username ||
//                 !password || 
//                 !name || 
//                 !age 
//             }
//             onClick={() => validate(username)}
//             >
//              LOGIN   
//             </button>

//         </div>
//     );
// };








import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginLoading, loginSuccess, loginFailure } from "../Redux/Login/action";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleSubmit = () => {
       const userDetails = {
           username,
           password
       }

       dispatch(loginLoading()); // set loading status to true
       fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
           method: "POST",
           body: JSON.stringify(userDetails),
           headers: {
               "Content-Type": "application/json"
           }
       }).then((res) => res.json())
       .then((res) => {
           dispatch(loginSuccess(res.token));
           navigate("/");
        })   // sets token and auth status
       .catch((err) => dispatch(loginFailure()));
     
    };

    return (
    <div>
        <input 
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />

        <br/>

        <input 
        type="text"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <br/>

        <button onClick={handleSubmit}>SUBMIT</button>
    </div>
    );
};

