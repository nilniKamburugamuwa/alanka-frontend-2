export const GetCurrentUser = () =>{
    return JSON.parse(localStorage.getItem("user"));
}
