import { Get_mothlyAdd,Get_weeklyAdd} from "../actions/HomeActions";



const initialState ={
    TotalPrice: [],

}
export default function (state=initialState,action) {

    switch (action.type)
    {
        case Get_mothlyAdd:
            
            Expenses= action.id;

            return {
                Expenses:Expenses,
             }
             case Get_weeklyAdd:
            
             Expenses= action.id;
 
             return {
                 Expenses:Expenses,
              }


            default:
            return state
    }
}