// import { useContext } from "react";
// // import { useNavigate } from "react-router-dom";
// import { RegistrationContext } from "../Context/RegistrationContext";
// import "./Login.css";

// export const SignUp = () => {
//     const {name, age, username, password, dispatch, handleSubmit} = useContext(RegistrationContext);

//     // const navigate = useNavigate();

//     return(
//         <div className="form1">
//             <input
//             placeholder="Name"
//             type="text"
//             value={name}
//             onChange= {(e) => 
//             dispatch({type: "CHANGE_NAME", payload: e.target.value})
//             }
//             >
//             </input>

//             <br/>

//             <input
//             placeholder="Age"
//             type="number"
//             value={age}
//             onChange= {(e) => 
//             dispatch({type: "CHANGE_AGE", payload: e.target.value})
//             }
//             >
//             </input>

//             <br/>

//             <input
//             placeholder="enter username"
//             type="text"
//             value={username}
//             onChange= {(e) => 
//             dispatch({type: "CHANGE_USERNAME", payload: e.target.value})
//             }
//             >
//             </input>

//             <br/>


//             <input
//             placeholder="enter password"
//             type="password"
//             value={password}
//             onChange= {(e) => 
//             dispatch({type: "CHANGE_PASSWORD", payload: e.target.value})
//             }
//             >
//             </input>

//             <br/>


//             <button 
//             disabled={!name && !age && !username && !password}
//             onClick={() => handleSubmit }
//             >
//              SIGN-UP   
//             </button>

//         </div>
//     );
// };