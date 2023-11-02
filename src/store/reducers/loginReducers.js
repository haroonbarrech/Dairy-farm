import { Get_login } from "../actions/loginActions";
import { Get_logout } from "../actions/loginActions";




const initialState ={
  user: []
}
export default function (state=initialState,action) {

    switch (action.type)
    {
        case Get_login:
            
        let LogIn = action.id;

            return {
               user:LogIn,
             }
             case Get_logout:
            
             
     
                 return {
                    user: [],
                  }
     


            default:
            return state
            
    }
}