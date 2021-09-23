
export const fetchUser = () =>{
    return $.ajax({
        url:'/api/users',
        method: "GET"
    })
}