import { useContext } from "react";
import {Navigate} from "react-router-dom";
import { RegistrationContext } from "../Context/RegistrationContext";
import "./Login.css";

export const Login = () => {
    const {
        dispatch,
        validate,
        password,
        name,
        age,
        username
    } = useContext(RegistrationContext);

    if(!name || !age || !username || !password) {
       <Navigate to="/signup"/> 
    }

    return(
        <div className="form2">
            <input
            placeholder="enter username"
            type="text"
            value={username}
            onChange= {(e) => 
            dispatch({
                type: "CHANGE_USERNAME",
                payload: e.target.value
             })
            }
            >
            </input>

            <br/>

            <input
            placeholder="enter password"
            type="text"
            value={password}
            onChange= {(e) => ( 
            dispatch({type: "CHANGE_PASSWORD", payload: e.target.value})
            )
            }
            >
            </input>

            <br/>

            <button 
            disabled={
                !username ||
                !password || 
                !name || 
                !age 
            }
            onClick={() => validate(username)}
            >
             LOGIN   
            </button>

        </div>
    );
};