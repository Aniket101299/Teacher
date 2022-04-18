import { createContext, useReducer } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export const RegistrationContext = createContext();

const initState = {
    name:"",
    age:"",
    username:"",
    password:""
};



function reducer(state,action) {
    switch(action.type) {
        case "CHANGE_NAME": 
            return {...state, name: action.payload};
        
        case "CHANGE_AGE":
            return {...state, age: action.payload};
         
        case "CHANGE_USERNAME" :
            return {...state, username: action.payload};

        case "CHANGE_PASSWORD":
            return {...state, password: action.payload};
           
        default:
            throw new Error();    
    }
}

// useReducer --> [state, dispatch];

export function RegistrationContextProvider ({children}) {

    const [state,dispatch] = useReducer(reducer, initState);
    const navigate = NavLink();

    const handleSubmit = () => {
        fetch("http://localhost:4545/admins", {
            method:"POST",
            body: JSON.stringify(state),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((res) => res.json())
        .then(() => 
        dispatch({type: "CHANGE_NAME", payload: ""}),
        dispatch({type: "CHANGE_AGE", payload: ""}),
        dispatch({type: "CHANGE_USERNAME", payload: ""}),
        dispatch({type: "CHANGE_PASSWORD", payload: ""}),
        navigate("/login")
        )
        .catch((error) => console.log(error))
    };

   const  validate = (username) => {
       axios.get(`http://localhost:4545/admins/${username}`)
       .then((res) => {console.log("res",res)})
   }
  


   const {name, age, username, password} = state;
   
   return (
       <RegistrationContext.Provider
       value = {{
               name,
               age,
               username,
               password,
               dispatch,
               handleSubmit,
               validate
           }}
       >
       {children}
       </RegistrationContext.Provider>
   )

}




// create context and maintaining state inside context - done
// create a wrapper that will allow access to these state values across your entire application - done
// accessing the values that comes from context