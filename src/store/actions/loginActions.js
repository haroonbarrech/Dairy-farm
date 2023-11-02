export const Get_login='logiin';
export const Get_logout='logout';




export const logiin =(id) =>
{
    return {type:Get_login ,id:id}
}

export const logout =(id) =>
{
    return {type:Get_login ,id:id}
}



