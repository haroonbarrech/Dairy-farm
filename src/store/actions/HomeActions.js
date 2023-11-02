export const Get_mothlyAdd='monthlyAdd';
export const Get_weeklyAdd='weeklyAdd';



export const monthlyAdd =(id) =>
{
    return {type:Get_mothlyAdd, id:id}
}

export const weeklyAdd =(id) =>
{
    return {type:Get_weeklyAdd, id:id}
}